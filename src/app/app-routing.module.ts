import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './shared/layouts/admin-layout/admin-layout.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent}
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: []
  },
  {
    path: '', component: AdminLayoutComponent, children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: []
})

export class AppRoutingModule {
}
