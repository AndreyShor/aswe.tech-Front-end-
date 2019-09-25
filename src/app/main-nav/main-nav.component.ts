import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

import { LayoutService } from './../layout.service';

import { slideInAnimation, fadeIn } from './../animations'
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [LayoutService],
  animations: [
    fadeIn
  ]
})
export class MainNavComponent {

  isHandset
  isTablet
  isWeb


  constructor(private LayoutService:LayoutService ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

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


  ngOnInit(): void {
    this.isHandset = this.LayoutService.isHandset$;
    this.isTablet = this.LayoutService.isTablet$;
    this.isWeb = this.LayoutService.isWeb$;
  }
}
