import { AbstractControl } from '@angular/forms';

export function ValidateUsername(control: AbstractControl) {
  const regx = new RegExp('^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');
  if (control.value && !regx.test(control.value)) {
    return { validUsername: true };
  }
  return null;
}
