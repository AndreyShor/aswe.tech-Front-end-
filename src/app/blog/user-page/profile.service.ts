import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Auth } from '../auth.service';


@Injectable({
  providedIn: 'root'
})

export class Profile {
  constructor(private http: HttpClient) {}

  public fetchUserData(token) {
    return new Promise((res, rej) => {
      this.http.get < {
        data: {
            name: string,
            surname: string,
            username: string,
            email: string
          }
        } > ('http://localhost:800/api/blog/myprofile', token)
        .subscribe((serverResponse) => {
          res(serverResponse);
        });
    });
  }
}
