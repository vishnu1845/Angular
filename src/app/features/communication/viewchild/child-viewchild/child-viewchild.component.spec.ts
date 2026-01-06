import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewchildComponent } from './child-viewchild.component';

describe('ChildViewchildComponent', () => {
  let component: ChildViewchildComponent;
  let fixture: ComponentFixture<ChildViewchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildViewchildComponent]
    });
    fixture = TestBed.createComponent(ChildViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
