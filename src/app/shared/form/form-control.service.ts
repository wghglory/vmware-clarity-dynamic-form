import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormControlBase } from './form-control-base';
import { checkboxValidator } from './checked-validator';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  constructor() {}

  toFormGroup(models: FormControlBase<string>[]): FormGroup {
    const group: any = {};

    models.forEach((m) => {
      const rules = m.validations;

      group[m.key] = rules
        ? new FormControl(m.value || '', this.addValidations(rules))
        : new FormControl(m.value || '');
    });
    return new FormGroup(group);
  }

  /**
   * todo: add more validation rules
   * @param rules validation rules
   */
  private addValidations(rules: {
    [key: string]: { value?: any; pattern?: any; error: string };
  }) {
    const validations = [];

    Object.keys(rules).forEach((key) => {
      switch (key) {
        case 'required':
          validations.push(Validators.required);
          break;
        case 'email':
          validations.push(Validators.email);
          break;
        case 'minlength':
          validations.push(Validators.minLength(rules[key].value));
          break;
        case 'checked':
          validations.push(checkboxValidator(rules[key].value));
          break;
      }
    });
    return validations;
  }
}
