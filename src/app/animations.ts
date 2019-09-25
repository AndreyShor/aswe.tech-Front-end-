import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild,
    group
  } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'absolute' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

  export const fadeIn = 
    trigger('routeAnimations', [
        transition('*=> AboutPage', [
            style({opacity: 0}),
            animate('0.6s', style({opacity: 1}))
        ]),

        transition('*=> HomePage', [
            style({opacity: 0}),
            animate('0.6s', style({opacity: 1}))
        ]),
        transition('*=> ContactPage', [
            style({opacity: 0}),
            animate('0.6s', style({opacity: 1}))
        ]),
        transition('*=> PortfolioPage', [
            style({opacity: 0}),
            animate('0.6s', style({opacity: 1}))
        ])
    ])