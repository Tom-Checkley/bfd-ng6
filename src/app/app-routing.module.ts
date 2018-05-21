import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/public/home/home.component';
import { AdminHomeComponent } from './_components/admin/admin-home/admin-home.component';
import { CompanyInfoComponent } from './_components/admin/company-info/company-info.component';
import { ContactComponent } from './_components/public/contact/contact.component';

const routes: Routes = [
  { path: 'admin/company-info', component: CompanyInfoComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
