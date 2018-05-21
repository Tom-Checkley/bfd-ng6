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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminHomeComponent,
    AdminNavComponent,
    CompanyInfoComponent,
    FooterComponent
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
