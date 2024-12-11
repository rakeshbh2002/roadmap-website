import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PythonComponent } from './home/python/python.component';
import { TsComponent } from './home/ts/ts.component';
import { JsComponent } from './home/js/js.component';
import { ReactComponent } from './home/react/react.component';
import { AngularComponent } from './home/angular/angular.component';
import { JavaComponent } from './home/java/java.component';
import {AboutComponent} from './home/about/about.component';
import { ProDetailComponent } from './home/pro-detail/pro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PythonComponent,
    TsComponent,
    JsComponent,
    ReactComponent,
    AngularComponent,
    JavaComponent,
    AboutComponent,
    ProDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
