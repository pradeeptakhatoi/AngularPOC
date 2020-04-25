import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpLoggerService {
  constructor() {}

  log(data) {
    console.log("========Using Http Logger=======");
    console.log(data);
    console.log("========Using Http Logger=======");
  }
}
