import { Component, OnInit } from '@angular/core';
import { FaqService } from '../services/faq.service';
import { Faq } from '../models/faq';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss'],
  providers: [ FaqService ]
})
export class FaqListComponent implements OnInit {
  faqList: Faq[];
  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqService.getFaqList().subscribe(
      (data: Faq[]) => {
        this.faqList = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
