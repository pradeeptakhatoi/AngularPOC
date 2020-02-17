import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  isLoading = true;
  heros = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeros().pipe(delay(2000)).subscribe(heros => {
      this.heros = heros;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

}
