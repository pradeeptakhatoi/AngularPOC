import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { LoggerService } from "../_services/logger.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {

  constructor(private http: HttpClient, private logger: LoggerService) { }

  public getHeros() {
    const options = {observe: "response"};
    return this.http.get<[any]>("./assets/data/heros.json", {observe: "response"}).pipe(
      tap(result => this.logger.log(result))
    );
  }

}

