import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { LocalCrudComponent } from './local-crud/local-crud.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      { path: 'api-crud', component: ApiCrudComponent },
      { path: 'local-crud', component: LocalCrudComponent },
      { path: '', redirectTo: 'api-crud', pathMatch: 'full' } // optional default
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
