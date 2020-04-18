import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

import { AutoGrowDirective } from './auto-grow.directive';
import { IfTrueDirective } from './if-true.directive';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  providers: [
    BsModalRef
  ],
  declarations: [
    AutoGrowDirective,
    IfTrueDirective
  ],
  exports: [
    AutoGrowDirective,
    IfTrueDirective
  ],
})
export class POCSharedModule {}
