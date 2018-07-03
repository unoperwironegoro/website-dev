import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PersonalLinksComponent } from './personal-links/personal-links.component';
import { MaterialModule } from './material/material.module';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'about',
    component: PersonalLinksComponent
  },
  {
    path: 'mystery',
    component: NavBarComponent
  },
  { path: '**', redirectTo: 'about' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PersonalLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
