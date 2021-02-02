import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { MybugsComponent } from './mybugs/mybugs.component';
import { NewbugComponent } from './newbug/newbug.component';
import { ErrorComponent } from './error/error.component';
import { AllbugsComponent } from './allbugs/allbugs.component';
import { BugComponent } from './bug/bug.component';
import { DataService } from './data.service';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';
import { LogoutComponent } from './logout/logout.component';
import {HttpIntercepterBasicAuthService} from './service/http/http-intercepter-basic-auth.service';
import {BasicAuthenticationService} from './service/basic-authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    MybugsComponent,
    NewbugComponent,
    ErrorComponent,
    AllbugsComponent,
    BugComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,HardcodedAuthenticationService,HttpIntercepterBasicAuthService,BasicAuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
