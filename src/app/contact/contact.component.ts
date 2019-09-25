import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../mail.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
  onEmailSend(emailData: Email) {
    this.http
      .post<{ name: string }>(
        'http://localhost:3000/api/post/email',
        emailData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
