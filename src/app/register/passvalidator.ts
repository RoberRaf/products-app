import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function strongPassword(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (!value) {
    return null;
  }
  const hasUpperCase = /[A-Z]+/.test(value);
  const hasLowerCase = /[a-z]+/.test(value);
  const hasNumeric = /[0-9]+/.test(value);
  const hasSpecialCharacters = /[!@#\$%\^&\*]+/.test(value);

  const passwordValid =
    hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacters;
  console.log('passwordValid', passwordValid);
  return passwordValid ? null : { passwordStrength: true };
}

export function passwordMatch(toMatch: () => string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    if (!value) {
      return null;
    }
    const passwordMatch = value === toMatch();

    console.log('passwordMatch', passwordMatch);
    return passwordMatch ? null : { misMatch: true };
  };
}
