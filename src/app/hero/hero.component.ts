import { Component, OnInit, TemplateRef } from '@angular/core';
import { HeroService } from './hero.service';
import { delay } from 'rxjs/operators';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ViewHeroComponent } from './view/view-hero.component';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
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
  constructor(private heroService: HeroService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.heroService.getHeros().pipe(delay(2000)).subscribe((response: HttpResponse<any>) => {
      console.log(response);
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
