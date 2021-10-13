import {Component, OnInit, Input} from '@angular/core';
import {RegistrationService} from '../shared/forms/registration.service';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  form: FormGroup;
  /*hideRequiredControl = new FormControl(false);*/
  constructor() {
    this.form = new FormGroup({
      tel: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      rp: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      sms: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      conditions: new FormControl(false)
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

}


















