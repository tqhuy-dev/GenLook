import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { MainModule } from './Main/main.module';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './component/date-picker/date-picker.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
