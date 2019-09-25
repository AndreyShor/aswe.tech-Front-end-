import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

})


export class HomePageComponent implements OnInit {

  constructor() {}

  changeLang(lang: string) {

    if (lang === 'ru') {
      localStorage.setItem('locale', 'ru');
      window.location.reload();
    }

    if (lang === 'en') {
      localStorage.setItem('locale', 'en');
      window.location.reload();
    }
  }

  ngOnInit() {
  }
}
