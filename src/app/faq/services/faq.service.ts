import { of } from 'rxjs';
import faqList from '../../../assets/data/faq.json';

export class FaqService {
  getFaqList() {
    return of(faqList);
  }
}
