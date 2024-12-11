import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.css']
})
export class ProDetailComponent {
  constructor(private router: Router) {}
 
  navigateToPage(page: string): void {
    this.router.navigate([page]);
  }

  }

