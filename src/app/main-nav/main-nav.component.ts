import { Component, ViewChild, AfterViewChecked} from '@angular/core';
import { LayoutService } from './../layout.service';
import { Router, NavigationEnd } from '@angular/router';
import { slideInAnimation, fadeIn } from './../animations';
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
export class MainNavComponent{

  isHandset: any;
  isTablet: any;
  isWeb: any;
  contentContainer: Element;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private LayoutService: LayoutService, private router: Router)  {}



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


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.isHandset = this.LayoutService.isHandset$;
    this.isTablet = this.LayoutService.isTablet$;
    this.isWeb = this.LayoutService.isWeb$;

    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
          const contentContainer = document.querySelector('.mat-sidenav-content') || window;
          contentContainer.scrollTo(0, 0);
      });
  }
}
