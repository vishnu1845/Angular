import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';
import { SubjectTypesComponent } from './subject-types/subject-types.component';


const routes: Routes = [
  { path: '', redirectTo: 'operator', pathMatch: 'full' },   // Default route
  { path: 'operator', component: OperatorsComponent },
  { path: 'subject', component: SubjectTypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule {}
