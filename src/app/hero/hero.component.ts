import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heros = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe(heros => {
      this.heros = heros;
    });
  }

}
