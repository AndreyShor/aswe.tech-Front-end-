// Libraries Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// Web Site's Components
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioMinComponent } from './portfolio/portfolio-min/portfolio-min.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleElementComponent } from './blog/article-element/article-element.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { ArticleComponent } from './blog/article/article.component';
import { ArticleCommentComponent } from './blog/article/article-comment/article-comment.component';
import { CategoryComponent } from './blog/category/category.component';
import { CategoryElementComponent } from './blog/category/category-element/category-element.component';
import { AdminComponent } from './blog/admin/admin.component';
import { UserPageComponent } from './blog/user-page/user-page.component';
import { SignupSigninComponent } from './blog/signup-signin/signup-signin.component';
import { AuthInterceptor } from './blog/auth-interceptor';
import { AuthGuard } from './blog/auth.guard';
// Roots of user pages
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
  { path: 'me', component: AboutMeComponent, data: {animation: 'AboutPage'} },
  { path: 'portfolio', component: PortfolioComponent, data: {animation: 'PortfolioPage'} },

  { path: 'blog', component: BlogComponent, data: {animation: 'PortfolioPage'} },
  { path: 'blog/article-list', component: ArticleListComponent, data: {animation: 'PortfolioPage'} },
  { path: 'blog/article', component: ArticleComponent, data: {animation: 'PortfolioPage'} },
  { path: 'blog/auth', component: SignupSigninComponent, data: {animation: 'PortfolioPage'} },
  { path: 'blog/user-page', component: UserPageComponent, data: {animation: 'PortfolioPage'}, canActivate: [AuthGuard]},
  { path: 'blog/admin', component: AdminComponent, data: {animation: 'PortfolioPage'}, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomePageComponent,
    ContactComponent,
    AboutMeComponent,
    PortfolioComponent,
    PortfolioMinComponent,
    BlogComponent,
    ArticleElementComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticleCommentComponent,
    CategoryComponent,
    CategoryElementComponent,
    AdminComponent,
    UserPageComponent,
    SignupSigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
