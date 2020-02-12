import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heros = [];
  constructor() { }

  ngOnInit(): void {
    const heroService = new HeroService();
    this.heros = heroService.getHeros();
  }

}
