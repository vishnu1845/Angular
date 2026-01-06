import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.directive';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    CustomPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    CustomPipe
  ]
})
export class SharedModule {}
