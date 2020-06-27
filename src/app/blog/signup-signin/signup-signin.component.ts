import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';

import { Auth } from './auth.service';
import { SignupData } from './auth.model';

@Component({
  selector: 'app-signup-signin',
  templateUrl: './signup-signin.component.html',
  styleUrls: ['./signup-signin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupSigninComponent implements OnInit {
  signupForm: FormGroup;
  errServer: boolean;
  @ViewChild('serverDataValidatorErr', {static: true}) serverErrMessage: ElementRef;

  constructor(private auth: Auth) {}


  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passData: new FormGroup({
        password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(5)])
      }, this.PassValidator)
    });
  }
  onSignUp() {
    const data: SignupData = {
      name: this.signupForm.get('name').value,
      surname: this.signupForm.get('surname').value,
      username: this.signupForm.get('username').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('passData.password').value,
    }
    this.auth.signup(data)
    .then( result => {
      console.log(result);
    })
    .catch( err => {
      this.serverErrMessage.nativeElement.value = err;
      this.errServer = true;
    });
  }

  PassValidator(control: FormGroup): {[s: string]: boolean} {
    if (control.get('password').value !== control.get('confirmPassword').value){
      return {passwordError: true};
    } else{
      return null;
    }
  }
}
