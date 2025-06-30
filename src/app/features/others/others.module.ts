import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './others.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { InterceptorComponent } from './interceptor/interceptor.component';


@NgModule({
  declarations: [
    OthersComponent,
    ViewEncapsulationComponent,
    ChangeDetectionComponent,
    NgTemplateComponent,
    LifecycleComponent,
    InterceptorComponent
  ],
  imports: [
    CommonModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
