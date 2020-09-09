import {
  Injectable
} from '@angular/core';
import {
  HttpClient, HttpParams, HttpHeaders
} from '@angular/common/http';
import {
  Auth
} from '../auth.service';
import {
  Router
} from '@angular/router';
import {
  FetchAdminData
} from './admin.models';


@Injectable({
  providedIn: 'root'
})

export class Admin {

  constructor(private http: HttpClient, private router: Router) {}

  public fetcData(token) {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:800/api/admin/fetchData', token)
        .subscribe((serverResponse: FetchAdminData) => {
          if (serverResponse.userList) {
            const serverData = {
              userLIst: serverResponse.userList,
              articleList: serverResponse.articleList
            };
            console.log(serverData);
            res(serverData);
          }

          if (serverResponse.denied) {
            this.router.navigate(['/']);
          }
        });
    });
  }


  public deleteArticle(articleId: string) {
    const queryParams = new HttpParams().set('id', articleId);

    const headers = new HttpHeaders({ 'Content-Type': 'application/JSON', 'Request Method': 'DELETE' });
    const options = {
      header: headers,
      params: queryParams };
    return new Promise((res, rej) => {
      this.http.delete('http://localhost:800/api/admin/deleteArticle', options)
        .subscribe((serverResponse: any) => {
          res(serverResponse.articleEdit);
        });
    });
  }

  public deleteUser(email: string) {
    const queryParams = new HttpParams().set('email', email);

    const headers = new HttpHeaders({ 'Content-Type': 'application/JSON', 'Request Method': 'DELETE' });
    const options = {
      header: headers,
      params: queryParams };
    return new Promise((res, rej) => {
      this.http.delete('http://localhost:800/api/admin/deleteUser', options)
        .subscribe((serverResponse: any) => {
          console.log(serverResponse);
          res(serverResponse);
        });
    });
  }

  public addArticle(articleData: {articleName: string, text: string, articleGenre: string}, image: File) {
    const data = new FormData();
    data.append('image', image, 'Photmkdml');
    data.append('text', articleData.text);
    data.append('articleName', articleData.articleName);
    data.append('articleGenre', articleData.articleGenre);

    return new Promise((res, rej) => {
      this.http.post('http://localhost:800/api/admin/addArtcile', data)
        .subscribe((serverResponse: any) => {
          res(serverResponse);
        } );
    });
  }

  public editArticle(articleData: {articleName: string, text: string, articleGenre: string, id: string}) {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:800/api/admin/editArticle', articleData)
        .subscribe((serverResponse: any) => {
          console.log(serverResponse);
          res(serverResponse);
        } );
    });
  }

  public editUsser(userData: {name: string, surname: string, email: string, id: string}) {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:800/api/admin/editUser', userData)
        .subscribe((serverResponse: any) => {
          console.log(serverResponse);
          res(serverResponse);
        } );
    });
  }

}
