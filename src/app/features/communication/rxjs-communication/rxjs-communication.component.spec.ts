import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCommunicationComponent } from './rxjs-communication.component';

describe('RxjsCommunicationComponent', () => {
  let component: RxjsCommunicationComponent;
  let fixture: ComponentFixture<RxjsCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsCommunicationComponent]
    });
    fixture = TestBed.createComponent(RxjsCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
