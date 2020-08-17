import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  Auth
} from '../auth.service';
import {
  LoginDataServer
} from '../auth.model';
import {
  Profile
} from './profile.service';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {

  constructor(private auth: Auth, private profile: Profile) {}
  profileData: any;
  spinner = false;

  editOnOff = false;
  editName: string;
  editmode: string;
  editValue: string;

  editForm: FormGroup;


  @ViewChild('name', {
    static: true
  }) profileName: ElementRef;
  @ViewChild('surname', {
    static: true
  }) profileSurname: ElementRef;
  @ViewChild('email', {
    static: true
  }) profileEmail: ElementRef;


  ngOnInit() {
    this.spinner = true;
    this.profile.fetchUserData(this.auth.getToken()).then((serverResponse: any) => {
      this.profileData = serverResponse;
    }).then(() => {
      this.profileName.nativeElement.innerHTML = this.profileData.data.name;
      this.profileSurname.nativeElement.innerHTML = this.profileData.data.surname;
      this.profileEmail.nativeElement.innerHTML = this.profileData.data.email;
      this.spinner = false;
    });

    this.editForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      userFullName: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

  editFormCloseOpen(option: boolean, fieldText?: string, whatChange?: string) {
    this.editOnOff = option;
    this.editName = fieldText;
    this.editmode = whatChange;

    // Set text in a form;
    switch (whatChange) {
      case 'name':
        this.editForm.controls.userFullName.setValue(this.profileName.nativeElement.innerHTML);
        break;
      case 'surname':
        this.editForm.controls.userFullName.setValue(this.profileSurname.nativeElement.innerHTML);
        break;
      case 'email':
        this.editForm.controls.email.setValue(this.profileEmail.nativeElement.innerHTML);
        break;
      case 'password':
        this.editForm.controls.userFullName.setValue('**********');
        break;
    }
    if (!option) {
      this.editmode = '';
      this.editValue = '';
    }
  }



  onEdit() {
    this.spinner = true;
    let changeData: string;
    if ( this.editmode === 'email') {
      changeData = this.editForm.get('email').value;
    } else {
      changeData = this.editForm.get('userFullName').value;
    }
    this.profile
      .changeData(changeData, this.editmode)
      .then( (changeLabel: any) => {
        switch (this.editmode) {
          case 'name':
            this.profileName.nativeElement.innerHTML = changeLabel.name;
            break;
          case 'surname':
            this.profileSurname.nativeElement.innerHTML = changeLabel.surname;
            break;
          case 'email':
            this.profileEmail.nativeElement.innerHTML = changeLabel.email;
            break;
          case 'password':
            break;
        }
        this.spinner = false;
        this.editFormCloseOpen(false);
      });
  }
}
