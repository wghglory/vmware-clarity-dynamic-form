export class FormControlBase<T> {
  key: string;
  controlType: string;
  value: T;
  label: string;
  helper: string;
  type: string;
  placeholder: string;
  options: { key: string; value: string }[];
  validations?: {
    // required, minlength
    [key: string]: {
      value?: any; // 4, string, customValidatorFn()
      pattern?: any; // custom pattern
      error: string; // field is required
    };
  };

  order: number;

  constructor(model: ControlModel<T> = {}) {
    this.key = model.key || '';
    this.controlType = model.controlType || '';
    this.value = model.value;
    this.label = model.label || '';
    this.placeholder = model.placeholder || '';
    this.helper = model.helper || '';
    this.order = model.order === undefined ? 1 : model.order;
    this.type = model.type || '';
    this.options = model.options || [];
    this.validations = model.validations || {};
  }
}

export interface ControlModel<T> {
  key?: string; // formControlName
  controlType?: string; // input, select
  value?: T; // default value
  label?: string;
  placeholder?: string;
  type?: string; // input text | number | email
  options?: { key: string; value: string }[]; // select options
  helper?: string; // clr helper text
  validations?: {
    // required, minlength
    [key: string]: {
      value?: any; // 4, string, customValidatorFn()
      pattern?: any; // custom pattern
      error: string; // field is required
    };
  };
  order?: number;
}
