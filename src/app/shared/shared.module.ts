import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from './title-case.pipe';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    TitleCasePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [TitleCasePipe, HighlightDirective]
})
export class SharedModule { }
