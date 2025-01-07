import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserTableComponent {
  userData: any;

  constructor(private router: Router) {
    this.userData = this.router.getCurrentNavigation()?.extras.state;  
  }
}
