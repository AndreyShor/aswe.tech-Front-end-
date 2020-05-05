import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Data } from '@angular/router';
import { Subject } from 'rxjs';
import { ContactData } from './contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {

constructor(private http: HttpClient, private router: Router) {}

Send(name: string, email: string, message: string) {
  // tslint:disable-next-line: no-shadowed-variable
  const ContactData: ContactData = {
    name,
    email,
    message
  };

  console.log(ContactData);

  this.http.post('http://localhost:800/api/mail/send', ContactData)
    .subscribe(response => {
      console.log(response);
    });
}

}
