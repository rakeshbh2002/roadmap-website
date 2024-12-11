import { Component } from '@angular/core';
import { Router, NavigationError } from '@angular/router';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        console.log('Navigation error:', event.error);
      }
    });
 }
}