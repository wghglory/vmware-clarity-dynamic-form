import { ValidatorFn, AbstractControl } from '@angular/forms';

export function checkboxValidator(val: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value === val ? null : { checked: { value: control.value } };
  };
}
