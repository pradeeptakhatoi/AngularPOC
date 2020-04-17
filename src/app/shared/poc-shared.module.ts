import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoGrowDirective } from './auto-grow.directive';
import { IfTrueDirective } from './if-true.directive';

@NgModule({
  imports: [CommonModule],
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
