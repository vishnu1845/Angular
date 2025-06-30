import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { RxjsCommunicationComponent } from './rxjs-communication/rxjs-communication.component';
import { StorageComponent } from './storage/storage.component';


const routes: Routes = [
  { path: '', component: CommunicationComponent }, // Optional parent UI overview

  // Child feature routes
  { path: 'input-output', component: InputOutputComponent },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'rxjs-communication', component: RxjsCommunicationComponent },
  { path: 'storage', component: StorageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule {}
