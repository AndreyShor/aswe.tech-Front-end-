import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Data } from '@angular/router';
import { Subject } from 'rxjs';
import { SignupData, RegData, LoginData, LoginDataServer } from './auth.model';

@Injectable({ providedIn: 'root' })
export class Auth {
  constructor(private http: HttpClient) {}


  public signup(data: SignupData){
    return new Promise((res, rej) => {
      this.http.post('http://localhost:800/api/blog/signup', data).subscribe((serverResponse: RegData)  => {
        if (serverResponse.reg === true) {
          res(serverResponse.message);
        } else {
          rej(serverResponse.err);
        }
      });
    });
  }

  public login(data: LoginData) {
    console.log(data);
    return new Promise((res, rej) => {
      this.http.post('http://localhost:800/api/blog/signin', data).subscribe((serverResponse: LoginDataServer)  => {
        if (serverResponse.login === true) {
          res(serverResponse.message);
        } else {
          rej(serverResponse.message);
        }
      });
    });
  }

}
