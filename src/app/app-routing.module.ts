import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/public/home/home.component';
import { AdminHomeComponent } from './_components/admin/admin-home/admin-home.component';
import { CompanyInfoComponent } from './_components/admin/company-info/company-info.component';
import { ContactComponent } from './_components/public/contact/contact.component';
import { TestimonialsComponent } from './_components/public/testimonials/testimonials/testimonials.component';
import { VerifyTestimonialsComponent } from './_components/admin/verify-testimonials/verify-testimonials.component';
import { ServicesComponent } from './_components/public/services/services/services.component';

const routes: Routes = [
  { path: 'admin/verify-testimonials', component: VerifyTestimonialsComponent },
  { path: 'admin/company-info', component: CompanyInfoComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
