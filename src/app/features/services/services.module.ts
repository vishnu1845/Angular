import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { LocalCrudComponent } from './local-crud/local-crud.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ApiCrudComponent,
    LocalCrudComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
