import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import {
  SelectControl,
  InputControl,
  FormControlBase,
  CheckboxControl,
} from '@shared/form';

@Injectable({
  providedIn: 'root',
})
export class FormNormalService {
  constructor() {}

  getControls() {
    const models: FormControlBase<any>[] = [
      new SelectControl({
        key: 'rating',
        label: 'Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),
      new InputControl({
        key: 'firstName',
        label: 'First name',
        value: 'Derek',
        validations: {
          required: {
            error: 'first name is required',
          },
          minlength: {
            error: 'first name min length is 4',
            value: 4,
          },
        },
        helper: 'Helper text that shows while it is pristine and valid',
        order: 1,
      }),
      new InputControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter email',
        order: 2,
        validations: {
          email: {
            error: 'email is not valid',
          },
        },
      }),
      new CheckboxControl({
        key: 'understand',
        label: 'I confirm all information above is real',
        validations: {
          required: {
            error: 'Please confirm the checkbox',
          },
          checked: {
            error: 'Checkbox is not checked',
            value: true, // not checked or false is valid
          },
        },
        order: 4,
      }),
    ];

    return of(models.sort((a, b) => a.order - b.order));
  }
}
