import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FormNormalComponent } from './form-normal.component';

describe('FormNormalComponent', () => {
  let component: FormNormalComponent;
  let fixture: ComponentFixture<FormNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormNormalComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
