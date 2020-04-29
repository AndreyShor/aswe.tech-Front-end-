import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

})


export class HomePageComponent implements OnInit {



  changeLang(lang: string) {
    if (lang === 'ru') {
      localStorage.setItem('locale', 'ru');
      window.location.reload();
      console.log('Yes work !')
    }

    if (lang === 'en') {
      localStorage.setItem('locale', 'en');
      window.location.reload();
    }
  }

  ngOnInit() {}
}
