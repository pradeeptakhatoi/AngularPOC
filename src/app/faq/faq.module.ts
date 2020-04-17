import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqListComponent } from './faq-list/faq-list.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    FaqListComponent,
    FaqComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class FaqModule {}
