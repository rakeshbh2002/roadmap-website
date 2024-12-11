import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { PythonComponent } from './python/python.component';  


@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor(private router: Router) {}
 
   navigateToPage(page: string): void {
     this.router.navigate([page]);
   }
 }




