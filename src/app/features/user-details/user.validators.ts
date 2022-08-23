import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const UserNameRequired: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control && control.value) {
    return null;
  }

  return {
    required: true,
  };
};

type UserNameMinLegnthValidatorFn = (minLength: number) => ValidatorFn;

export const UserNameMinLengthValidator: UserNameMinLegnthValidatorFn =
  (minLength: number): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    if (control && control.value) {
      if (control.value.length >= minLength) {
        return null;
      }

      if (control.value.length < minLength) {
        return {
          minLength: {
            actualLength: control.value.length,
            requiredLength: minLength,
          },
        };
      }
    }
    return null;
  };

export const GreaterThanValidator =
  (minCtrlName: string, maxCtrlName: string) =>
  (formGroup: AbstractControl): ValidationErrors | null => {
    if (formGroup) {
      const minCtrl = formGroup.get(minCtrlName);
      const maxCtrl = formGroup.get(maxCtrlName);

      if (minCtrl && maxCtrl && minCtrl.value >= maxCtrl.value) {
        return {
          min: true,
        };
      }
    }

    return null;
  };
