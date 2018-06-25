import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
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
import { DisplayStarsDirective } from './_directives/display-stars.directive';
import { LeaveTestimonialComponent } from './_components/public/testimonials/leave-testimonial/leave-testimonial.component';
import { VerifyTestimonialsComponent } from './_components/admin/verify-testimonials/verify-testimonials.component';
import { ServicesComponent } from './_components/public/services/services/services.component';
import { CctvComponent } from './_components/public/services/cctv/cctv.component';
import { InstallationComponent } from './_components/public/services/installation/installation.component';
import { RepairsComponent } from './_components/public/services/repairs/repairs.component';
import { ClearanceComponent } from './_components/public/services/clearance/clearance.component';
import { TankerComponent } from './_components/public/services/tanker/tanker.component';
import { ServiceNavComponent } from './_components/public/services/service-nav/service-nav.component';
import { PhoneNumbersComponent } from './_components/shared/phone-numbers/phone-numbers.component';
import { BlogAdminComponent } from './_components/admin/blog/blog-admin/blog-admin.component';
import { ManageBlogsComponent } from './_components/admin/blog/manage-blogs/manage-blogs.component';
import { AddBlogComponent } from './_components/admin/blog/add-blog/add-blog.component';
import { LoaderComponent } from './_components/shared/loader/loader.component';
import { BlogComponent } from './_components/shared/blog/blog/blog.component';
import { DisplayBlogsComponent } from './_components/shared/blog/display-blogs/display-blogs.component';
import { PoliciesComponent } from './_components/shared/policies/policies.component';
import { BlogPageComponent } from './_components/public/blog-page/blog-page.component';
import { TipsComponent } from './_components/public/tips/tips.component';
import { AboutComponent } from './_components/public/about/about.component';
import { LoginComponent } from './_components/admin/user/login/login.component';
import { RegisterComponent } from './_components/admin/user/register/register.component';
import { AddAdminComponent } from './_components/admin/user/add-admin/add-admin.component';
import { SkewedWrapperComponent } from './_components/shared/skewed-wrapper/skewed-wrapper.component';
import { LocationsComponent } from './_components/public/locations/locations.component';


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
    DisplayStarsComponent,
    DisplayStarsDirective,
    LeaveTestimonialComponent,
    VerifyTestimonialsComponent,
    ServicesComponent,
    CctvComponent,
    InstallationComponent,
    RepairsComponent,
    ClearanceComponent,
    TankerComponent,
    ServiceNavComponent,
    PhoneNumbersComponent,
    BlogAdminComponent,
    ManageBlogsComponent,
    AddBlogComponent,
    LoaderComponent,
    BlogComponent,
    DisplayBlogsComponent,
    PoliciesComponent,
    BlogPageComponent,
    TipsComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    AddAdminComponent,
    SkewedWrapperComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
