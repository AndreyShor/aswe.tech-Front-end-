import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Auth } from '../auth.service';
import { LoginDataServer } from '../auth.model';
import { Profile } from './profile.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private auth: Auth, private profile: Profile) { }
  profileData: any;
  spinner = false;

  @ViewChild('name', {static: true}) profileName: ElementRef;
  @ViewChild('surname', {static: true}) profileSurname: ElementRef;
  @ViewChild('email', {static: true}) profileEmail: ElementRef;


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
  }

}
