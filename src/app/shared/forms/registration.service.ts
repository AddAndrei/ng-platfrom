import {Injectable} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})

export class RegistrationService{
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl('')
    });
  }


}
