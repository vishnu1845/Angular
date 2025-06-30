import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './communication.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { RxjsCommunicationComponent } from './rxjs-communication/rxjs-communication.component';
import { StorageComponent } from './storage/storage.component';


@NgModule({
  declarations: [
    CommunicationComponent,
    InputOutputComponent,
    ViewchildComponent,
    RxjsCommunicationComponent,
    StorageComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule
  ]
})
export class CommunicationModule { }
