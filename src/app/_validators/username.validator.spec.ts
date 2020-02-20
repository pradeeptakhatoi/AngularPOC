import { ValidateUsername } from './username.validator';
import { FormControl } from '@angular/forms';

describe('Validate Username', () => {
  const control = new FormControl('input');

  it('empty username should be treated as valid', () => {
    control.setValue('');
    expect(ValidateUsername(control)).toBeNull();
  });

  it('username less than 4 char is invalid', () => {
    control.setValue('abc');
    expect(ValidateUsername(control)).toEqual({ validUsername: true });
  });

  it('username more than 20 char is invalid', () => {
    control.setValue('1234567890123456789012');
    expect(ValidateUsername(control)).toEqual({ validUsername: true });
  });

  it('username containg space or any special char are invalid', () => {
    control.setValue('qwer @123');
    expect(ValidateUsername(control)).toEqual({ validUsername: true });
  });

  it('username containing alpaha-numeric & bet 8-20 are valid', () => {
    control.setValue('pradeeptakumarkhatoi');
    expect(ValidateUsername(control)).toBeNull();
  });

});
