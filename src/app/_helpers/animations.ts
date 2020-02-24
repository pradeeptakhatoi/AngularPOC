import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('0.5s ease-out', style({ transform: 'translateX(100px)' }))
  ]),
  transition(':leave', [
    animate('0.5s ease-in', keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(20px)',
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
    ]))
  ])
]);
