import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';


@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    TemplateValidationComponent,
    ReactiveValidationComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
