import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PythonComponent }   from './home/python/python.component';
import { JavaComponent } from './home/java/java.component';
import { TsComponent } from './home/ts/ts.component';
import { jsDocComment } from '@angular/compiler';
import { JsComponent } from './home/js/js.component';
import { ReactComponent } from './home/react/react.component';
import { AngularComponent } from './home/angular/angular.component';
import { AboutComponent } from './home/about/about.component';
import { ProDetailComponent } from './home/pro-detail/pro-detail.component';

const routes: Routes = [
 {     path:'' ,component:HomeComponent },
 {     path:'Python' ,component:PythonComponent },
 {     path:'java' ,component:JavaComponent },

 {     path:'ts' ,component:TsComponent },

 {     path:'js' ,component:JsComponent },

 {     path:'react' ,component:ReactComponent },
 {     path:'angular' ,component:AngularComponent },
 {     path:'about' ,component:AboutComponent },
 {     path:'ProDetail' ,component:ProDetailComponent }







];

@NgModule({
 declarations: [],
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule { }