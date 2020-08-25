import { Component, ViewChild, AfterViewChecked, OnInit, OnChanges, OnDestroy} from '@angular/core';
import { LayoutService } from './../layout.service';
import { Router, NavigationEnd } from '@angular/router';
import { slideInAnimation, fadeIn } from './../animations';
import { RouterOutlet } from '@angular/router';
import { Auth } from './../blog/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [LayoutService],
  animations: [
    fadeIn
  ]
})
export class MainNavComponent implements OnInit, OnDestroy  {

  private authListenerSubs: Subscription;
  private adminListenerSubs: Subscription;
  isAuthUser = false;
  isAdminUser = false;

  isHandset: any;
  isTablet: any;
  isWeb: any;
  contentContainer: Element;



  // tslint:disable-next-line: no-shadowed-variable
  constructor(private LayoutService: LayoutService, private router: Router, private auth: Auth)  {}



  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
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

  onLogOut() {
    this.auth.logout();
  }


  ngOnInit() {

    this.isHandset = this.LayoutService.isHandset$;
    this.isTablet = this.LayoutService.isTablet$;
    this.isWeb = this.LayoutService.isWeb$;
    this.isAuthUser = this.auth.getisAuth();
    this.isAdminUser = this.auth.getisAdmin();

    this.authListenerSubs =  this.auth.getAuthStatusListener()
      .subscribe(isAuth => {
        this.isAuthUser = isAuth;
        console.log("this.isAuthUser", this.isAuthUser);
      });
    this.adminListenerSubs = this.auth.getAdmintatusListener()
      .subscribe(isAdmin => {
        this.isAdminUser = isAdmin;
        console.log("this.isAdminUser", this.isAdminUser);
      });


    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
          const contentContainer = document.querySelector('.mat-sidenav-content') || window;
          contentContainer.scrollTo(0, 0);
      });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
