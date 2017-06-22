import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { trigger , state , style , animate , transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(300px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  one$: Observable<boolean>;
  two$: Observable<boolean>;

  constructor() {
    this.one$ = Observable.create( ( observer ) => {
      console.log( 'one => created' );

      setTimeout( () =>  {
        console.log( 'one:true' );

        observer.next( true );
        observer.complete();
      }, 1000 )
    });

    this.two$ = Observable.create( ( observer ) => {
      console.log( 'two => created' );
      console.log( 'two:false' );

      observer.next( false );

      setTimeout( () => {
        console.log( 'two:true' );
        observer.next( true );
        // observer.complete();
      }, 2000 );
    });
  }

  ngOnInit() {

  }
}
