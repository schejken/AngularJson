import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { GetJsonComponent } from './get-json/get-json.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-json', component : GetJsonComponent, canActivate: [AuthGuardService] },
  { path: 'login', component : LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
        { enableTracing: true } // <-- debugging purpose only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
