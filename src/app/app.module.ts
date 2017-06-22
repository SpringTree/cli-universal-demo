import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { AppComponent  } from './app.component';

import { StoreModule   } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer       } from './store/reducers';
import { DummyEffects  } from './store/effects/dummy';

export { AppComponent  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
    RouterModule.forRoot([
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore( reducer ),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run( DummyEffects )
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
