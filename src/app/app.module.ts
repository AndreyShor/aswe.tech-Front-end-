// Libraries Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
// Web Site's Components
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioMinComponent } from './portfolio/portfolio-min/portfolio-min.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSectionModuleComponent } from './blog/blog-section-module/blog-section-module.component';
import { ArticleElementComponent } from './blog/article-element/article-element.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { ArticleComponent } from './blog/article/article.component';
import { ArticleCommentComponent } from './blog/article/article-comment/article-comment.component';
import { BlogSectionComponentComponent } from './blog/blog-section-module/blog-section-component/blog-section-component.component';
// Roots of user pages
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
  { path: 'me', component: AboutMeComponent, data: {animation: 'AboutPage'} },
  { path: 'portfolio', component: PortfolioComponent, data: {animation: 'PortfolioPage'} },
  { path: 'blog', component: BlogComponent, data: {animation: 'PortfolioPage'} }
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
    BlogSectionModuleComponent,
    ArticleElementComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticleCommentComponent,
    BlogSectionComponentComponent
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
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
