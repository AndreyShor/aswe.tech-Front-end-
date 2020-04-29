import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../mail.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // tslint:disable-next-line: no-shadowed-variable
  constructor( public ContactService: ContactService) {}

  ngOnInit() {
  }
  onEmailSend(emailData: Email) {
    if (emailData.invalid) {
      return;
    }

    this.ContactService.Send(emailData.name, emailData.email, emailData.content);


  }
}
