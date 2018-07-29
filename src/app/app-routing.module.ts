import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/public/home/home.component';
import { AdminHomeComponent } from './_components/admin/admin-home/admin-home.component';
import { CompanyInfoComponent } from './_components/admin/company-info/company-info.component';
import { ContactComponent } from './_components/public/contact/contact.component';
import { TestimonialsComponent } from './_components/public/testimonials/testimonials/testimonials.component';
import { VerifyTestimonialsComponent } from './_components/admin/verify-testimonials/verify-testimonials.component';
import { ServicesComponent } from './_components/public/services/services/services.component';
import { CctvComponent } from './_components/public/services/cctv/cctv.component';
import { ClearanceComponent } from './_components/public/services/clearance/clearance.component';
import { InstallationComponent } from './_components/public/services/installation/installation.component';
import { RepairsComponent } from './_components/public/services/repairs/repairs.component';
import { TankerComponent } from './_components/public/services/tanker/tanker.component';
import { BlogAdminComponent } from './_components/admin/blog/blog-admin/blog-admin.component';
import { BlogPageComponent } from './_components/public/blog-page/blog-page.component';
import { TipsComponent } from './_components/public/tips/tips.component';
import { LoginComponent } from './_components/admin/user/login/login.component';
import { RegisterComponent } from './_components/admin/user/register/register.component';
import { LocationsComponent } from './_components/public/locations/locations.component';
import { AboutComponent } from './_components/public/about/about.component';
import { AddAdminComponent } from './_components/admin/user/add-admin/add-admin.component';
import { UserService } from './_services/user.service';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'admin/blog-admin', component: BlogAdminComponent, canActivate: [UserService] },
  { path: 'admin/verify-testimonials', component: VerifyTestimonialsComponent, canActivate: [UserService] },
  { path: 'admin/add-admin-email', component: AddAdminComponent, canActivate: [UserService] },
  { path: 'admin/company-info', component: CompanyInfoComponent, canActivate: [UserService] },
  { path: 'admin', component: AdminHomeComponent, canActivate: [UserService] },
  { path: 'blogs', component: BlogPageComponent },
  { path: 'services/cctv', component: CctvComponent },
  { path: 'services/clearance', component: ClearanceComponent },
  { path: 'services/installation', component: InstallationComponent },
  { path: 'services/repairs', component: RepairsComponent },
  { path: 'services/tanker', component: TankerComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
