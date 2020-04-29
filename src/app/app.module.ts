import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

// Import custom library
import { TvmazeModule } from 'tvmaze';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CapitalizePipe } from './_helpers/capitalize.pipe';

import { ArticleAComponent } from './articles/article-a/article-a.component';
import { ArticleBComponent } from './articles/article-b/article-b.component';
import { ArticleCComponent } from './articles/article-c/article-c.component';

import { AdBannerComponent } from './ads/ad-banner.component';
import { Ad1Component } from './ads/ad1/ad1.component';
import { Ad2Component } from './ads/ad2/ad2.component';
import { Ad3Component } from './ads/ad3/ad3.component';
import { AdDirective } from './ads/ad.directive';
import { FaqModule } from './faq/faq.module';
import { FrontendlayoutComponent } from './frontend-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendlayoutComponent,
    AboutusComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CapitalizePipe,
    ArticleAComponent,
    ArticleBComponent,
    ArticleCComponent,
    AdBannerComponent,
    Ad1Component,
    Ad2Component,
    Ad3Component,
    AdDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule,
    AppRoutingModule,
    TvmazeModule,
    FaqModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Ad1Component,
    Ad2Component,
    Ad3Component
  ]
})
export class AppModule { }
