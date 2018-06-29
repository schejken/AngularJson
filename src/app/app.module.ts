import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { GetJsonComponent } from './get-json/get-json.component';
import { LoginComponent } from './login/login.component';
import { Site2Component } from './site2/site2.component';
import { KarmaTestComponent } from './karma-test/karma-test.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GetJsonComponent,
    LoginComponent,
    Site2Component,
    KarmaTestComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
