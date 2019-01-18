import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { MainComponent } from './Main/component/main/main.component';
import { HomePaigeComponent } from './Main/component/home-paige/home-paige.component';
import { DetailPaigeComponent } from './Main/component/detail-paige/detail-paige.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signin',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: MainComponent,
    children: [{
      path: '',
      component: HomePaigeComponent
    },
    {
      path: ':city',
      component: DetailPaigeComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
