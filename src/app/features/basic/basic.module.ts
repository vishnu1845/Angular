import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  declarations: [
    BasicComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }



