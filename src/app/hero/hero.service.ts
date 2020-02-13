import heros_json from '../../assets/data/heros.json';

export class HeroService {
  constructor() { }

  public getHeros() {
    return heros_json;
  }
}
