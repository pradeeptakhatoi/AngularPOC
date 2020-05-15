import { AbstractControl } from "@angular/forms";

export function validateTitle(length = 50) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log(control);
    const title: string = control.value;
    if (title.length > length) {
      return { invalidTitle: true, requiredLength: length };
    }
    return null;
  };
}
