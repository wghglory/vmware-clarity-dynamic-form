import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

import { FormControlBase } from '@shared/form';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss'],
})
export class DynamicFormControlComponent implements OnInit {
  constructor() {}

  @Input() model: FormControlBase<any>;
  @Input() form: FormGroup;

  get controlErrors(): ValidationErrors {
    return this.form?.controls[this.model.key].errors;
  }

  ngOnInit() {}
}
