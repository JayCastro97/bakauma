import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MenuModule } from '@progress/kendo-angular-menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { GridModule } from '@progress/kendo-angular-grid';






const routes = [
  { path: '', component: LandingComponent, text: 'Landing Page' },
  { path: 'about', component: AboutComponent, text: 'About' },
  // {
  //     path: 'info',
  //     component: InfoComponent,
  //     text: 'Info',
  //     children: [
  //         { path: 'about', component: AboutComponent, text: 'About' },
  //         { path: 'team', component: TeamComponent, text: 'Team' }
  //     ]
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MenuModule, 
    RouterModule.forRoot(routes), GridModule, BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: window.location.pathname }],
  bootstrap: [AppComponent]
})
export class AppModule { }
