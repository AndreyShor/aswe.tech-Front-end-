import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Router,
  Data
} from '@angular/router';
import {
  Subject,
  Observable
} from 'rxjs';
import {
  SignupData,
  RegData,
  LoginData,
  LoginDataServer
} from './auth.model';
import {
  EventEmitter
} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private isAuth: boolean;
  private token: string;
  private tokenTimer: NodeJS.Timer;
  private authStatusListener = new Subject < boolean > ();

  constructor(private http: HttpClient, private router: Router) {}


  public signup(data: SignupData) {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:800/api/blog/signup', data).subscribe((serverResponse: RegData) => {
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
      this.http.post < {
        token: string,
        expiresIn: number,
        message?: string
      } > ('http://localhost:800/api/blog/signin', data).subscribe((serverResponse) => {
        const token = serverResponse.token;
        if (token) {
          const expiresInDuration = serverResponse.expiresIn;
          this.setAuthTimer(expiresInDuration);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + (expiresInDuration * 1000));
          this.saveAuthData(token, expirationDate);
          this.token = token;
          this.isAuth = true;
          this.authStatusListener.next(true);
          this.router.navigate(['blog/user-page']);
        } else {
          rej(serverResponse.message);
        }
      });
    });
  }


  public logout() {
    this.clearAuthData();
    this.token = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/blog/auth']);
  }

  // Incase close of browser, it authorised user during 1 hour
  public autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuth = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }


  // Get validation data of user
  public getToken() {
    return this.token;
  }

  public getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  public getisAuth() {
    return this.isAuth;
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  // Manipulation of access data in localstorage
  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }

    return {
      token,
      expirationDate: new Date(expirationDate)
    };
  }

  public fetchUserData(token) {
    return new Promise((res, rej) => {
      this.http.get < {
          message: string,
          data: any
        } > ('http://localhost:800/api/blog/myprofile', token)
        .subscribe((serverResponse) => {
          console.log(serverResponse);
        });
    });
  }
}
