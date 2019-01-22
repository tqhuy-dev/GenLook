import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { MainModule } from './Main/main.module';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './component/date-picker/date-picker.component';
import { UserInformationComponent } from './UserInformation/user-information/user-information.component';
import { CartComponent } from './UserInformation/cart/cart.component';
import { InformationComponent } from './UserInformation/information/information.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DatePickerComponent,
    UserInformationComponent,
    CartComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
