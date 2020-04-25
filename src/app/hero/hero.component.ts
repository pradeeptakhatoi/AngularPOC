import { Component, OnInit, TemplateRef } from '@angular/core';
import { HeroService } from './hero.service';
import { delay } from 'rxjs/operators';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ViewHeroComponent } from './view/view-hero.component';
import { HttpResponse, HttpClient } from '@angular/common/http';


import { environment } from '../../environments/environment';
import { LoggerService } from '../_services/logger.service';
import { ConsoleLoggerService } from '../_services/console-logger.service';
import { HttpLoggerService } from '../_services/http-logger.service';

function getLoggerService() {
  if (environment.logger === "http") {
    return new HttpLoggerService();
  } else if (environment.logger === "console") {
    return new ConsoleLoggerService();
  }
  return new LoggerService();
}

function getHeroService(http: HttpClient, logger: LoggerService) {
  return new HeroService(http, logger);
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [
    {provide: LoggerService, useFactory: getLoggerService},
    {provide: HeroService, useFactory: getHeroService, deps: [HttpClient, LoggerService]},
  ]
})
export class HeroComponent implements OnInit {
  isLoading = true;
  heros = [];
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  private config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: false
  };
  constructor(
    private heroService: HeroService,
    private modalService: BsModalService,
    private logger: LoggerService) { }

  ngOnInit(): void {
    this.heroService.getHeros().pipe(delay(2000)).subscribe((response: HttpResponse<any>) => {
      this.logger.log(response);
      this.heros = response.body;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalWithComponent(heroData) {
    const initialState = {
      hero: heroData,
      title: heroData.name
    };
    this.modalRef2 = this.modalService.show(ViewHeroComponent, {initialState});
    this.modalRef2.content.closeBtnName = 'Close';
  }

}
