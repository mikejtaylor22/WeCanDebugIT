import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MybugsComponent } from './mybugs/mybugs.component';
import { NewbugComponent } from './newbug/newbug.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import { AllbugsComponent } from './allbugs/allbugs.component';
import {BugComponent} from './bug/bug.component';
import { LogoutComponent } from './logout/logout.component';
import {RouteGuardService} from './route-guard.service';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path: 'mybugs', component:MybugsComponent,canActivate:[RouteGuardService]},
  {path: 'newbug', component:NewbugComponent,canActivate:[RouteGuardService]},
  {path: 'allbugs', component:AllbugsComponent,canActivate:[RouteGuardService]},
  {path: 'bugs/:id', component:BugComponent,canActivate:[RouteGuardService]},
  {path: 'logout', component:LogoutComponent,canActivate:[RouteGuardService]},

  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
