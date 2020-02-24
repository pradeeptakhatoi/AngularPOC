import { trigger, state, style, transition, animate } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('0.5s ease-out', style({ transform: 'translateX(100px)' }))
  ]),
  transition(':leave', [
    animate('0.5s ease-in', style({ transform: 'translateX(-100px)' }))
  ])
]);
