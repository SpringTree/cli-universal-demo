/// <reference types="node" />

import { NgModule, NgModuleFactory, NgModuleFactoryLoader } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule, AppComponent } from './app.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export class ServerFactoryLoader extends NgModuleFactoryLoader {
  load(path: string): Promise<NgModuleFactory<any>> {
    return new Promise((resolve, reject) => {
      const [file, className] = path.split('#');
      const classes = require('../../dist/ngfactory/src/app' + file.slice(1) + '.ngfactory');
      resolve(classes[className + 'NgFactory']);
    });
  }
}

@NgModule({
  imports: [
    ServerModule,
    NoopAnimationsModule,
    AppModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: ServerFactoryLoader }
  ]
})
export class AppServerModule { }
