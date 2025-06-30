import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'basic', loadChildren: () => import('./features/basic/basic.module').then(m => m.BasicModule) },
  { path: 'forms', loadChildren: () => import('./features/forms/forms.module').then(m => m.FormsModule) },
  { path: 'observables', loadChildren: () => import('./features/observables/observables.module').then(m => m.ObservablesModule) },
  { path: 'promises', loadChildren: () => import('./features/promises/promises.module').then(m => m.PromisesModule) },
  { path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) },
  { path: 'communication', loadChildren: () => import('./features/communication/communication.module').then(m => m.CommunicationModule) },
  { path: 'authentication', loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'others', loadChildren: () => import('./features/others/others.module').then(m => m.OthersModule) },
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


