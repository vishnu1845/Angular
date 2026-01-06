import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ObservablesRoutingModule } from './observables-routing.module';
import { SubjectTypesComponent } from './subject-types/subject-types.component';
import { OperatorsComponent } from './operators/operators.component';


@NgModule({
  declarations: [
    OperatorsComponent,
    SubjectTypesComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    HttpClientModule
  ]
})
export class ObservablesModule { }
