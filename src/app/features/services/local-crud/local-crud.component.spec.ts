import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCrudComponent } from './local-crud.component';

describe('LocalCrudComponent', () => {
  let component: LocalCrudComponent;
  let fixture: ComponentFixture<LocalCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalCrudComponent]
    });
    fixture = TestBed.createComponent(LocalCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
