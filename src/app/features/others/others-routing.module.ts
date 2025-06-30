import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersComponent } from './others.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';


const routes: Routes = [
  {
    path: '',
    component: OthersComponent,
    children: [
      { path: 'lifecycle', component: LifecycleComponent},
      { path: 'interceptors', component: InterceptorComponent},
      { path: 'changedetection', component: ChangeDetectionComponent },
      { path: 'ngtemplate', component: NgTemplateComponent },
      { path: 'viewencapsulation', component: ViewEncapsulationComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
