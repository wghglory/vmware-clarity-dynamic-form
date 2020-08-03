import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { SelectControl } from '@shared/form';

import { DynamicFormControlComponent } from './dynamic-form-control.component';

describe('DynamicFormControlComponent', () => {
  let component: DynamicFormControlComponent;
  let fixture: ComponentFixture<DynamicFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [DynamicFormControlComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormControlComponent);
    component = fixture.componentInstance;

    component.form = new FormGroup({
      test: new FormControl(''),
    });
    component.model = new SelectControl({
      key: 'test',
      options: [
        {
          key: 'One',
          value: 'one',
        },
      ],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
