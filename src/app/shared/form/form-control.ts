import { FormControlBase } from './form-control-base';

export class SelectControl extends FormControlBase<any> {
  controlType = 'select';
}

export class InputControl extends FormControlBase<string> {
  controlType = 'input';
}

export class CheckboxControl extends FormControlBase<boolean> {
  controlType = 'checkbox';
}
