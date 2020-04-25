import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor() {}

  log(data) {
    console.log("======== Logger =======");
    console.log(data);
    console.log("======== Logger =======");
  }
}
