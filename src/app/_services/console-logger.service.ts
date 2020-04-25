import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConsoleLoggerService {
  constructor() {}

  log(data) {
    console.log("========Using Console Logger=======");
    console.log(data);
    console.log("========Using Console Logger=======");
  }
}
