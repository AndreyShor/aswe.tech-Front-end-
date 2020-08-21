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
            email: string,
            imageURL?: string
          }
        } > ('http://localhost:800/api/blog/myprofile', token)
        .subscribe((serverResponse) => {
          res(serverResponse);
        });
    });
  }

  public changeData(datatoChange: string, optionTochange: string) {
    const data = {
      datatoChange,
      optionTochange
    };
    return new Promise((res, rej) => {
      this.http.post<any>('http://localhost:800/api/blog/myprofile/change_name', data)
        .subscribe((serverResponse) => {
          console.log(serverResponse.accept);
          if (serverResponse.accept) {
            res(serverResponse.data);
          } else {
            rej('Ошибка ' + serverResponse);
          }
        });
    });
  }
  public saveProfileImage(image: File) {
    const data = new FormData();
    data.append('image', image, 'Photmkdml');
    console.log(data);
    return new Promise((res, rej) => {
      this.http.post<any>('http://localhost:800/api/blog/myprofile/updateProfileImage', data)
        .subscribe((serverResponse) => {
           res(true);
        });
    });
  }
}
