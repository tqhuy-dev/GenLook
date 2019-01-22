import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { MainComponent } from './Main/component/main/main.component';
import { HomePaigeComponent } from './Main/component/home-paige/home-paige.component';
import { DetailPaigeComponent } from './Main/component/detail-paige/detail-paige.component';
import { UserInformationComponent } from './UserInformation/user-information/user-information.component';
import { CartComponent } from './UserInformation/cart/cart.component';
import { InformationComponent } from './UserInformation/information/information.component';
import { AuthGuard } from './guard/auth-guard.services';
import { HomePaigeGuard } from './guard/home-guard.services';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    canActivate: [AuthGuard],
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signin',
    component: RegisterComponent
  },
  {
    canActivate: [HomePaigeGuard],
    path: 'home',
    component: MainComponent,
    children: [{
      path: '',
      component: HomePaigeComponent
    },
    {
      path: 'city/:city',
      component: DetailPaigeComponent
    },
    {
      path: 'user',
      component: UserInformationComponent,
      children: [
        {
          path: '',
          redirectTo: 'cart',
          pathMatch: 'full'
        },
        {
          path: 'cart',
          component: CartComponent
        },
        {
          path: 'information',
          component: InformationComponent
        }
      ]
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
