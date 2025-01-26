import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isNavOpen: boolean = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  onLogout(): void {
    location.reload();
    setTimeout(() => this.router.navigate(['/login']), 1200);
  }
}
