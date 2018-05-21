import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/firebase.config';

import { HeaderComponent } from './_components/shared/header/header.component';
import { HomeComponent } from './_components/public/home/home.component';
import { AdminHomeComponent } from './_components/admin/admin-home/admin-home.component';
import { AdminNavComponent } from './_components/admin/admin-nav/admin-nav.component';
import { CompanyInfoComponent } from './_components/admin/company-info/company-info.component';
import { FooterComponent } from './_components/shared/footer/footer.component';
import { ContactComponent } from './_components/public/contact/contact.component';
import { NavComponent } from './_components/shared/nav/nav.component';
import { DisplayTestimonialsComponent } from './_components/public/testimonials/display-testimonials/display-testimonials.component';
import { TestimonialsComponent } from './_components/public/testimonials/testimonials/testimonials.component';
import { DisplayStarsComponent } from './_components/shared/display-stars/display-stars.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminHomeComponent,
    AdminNavComponent,
    CompanyInfoComponent,
    FooterComponent,
    ContactComponent,
    NavComponent,
    DisplayTestimonialsComponent,
    TestimonialsComponent,
    DisplayStarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
