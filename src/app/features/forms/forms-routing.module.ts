import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

const routes: Routes = [
  { path: '', component: FormsComponent }, // Optional parent
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'template-validation', component: TemplateValidationComponent },
  { path: 'reactive-validation', component: ReactiveValidationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
