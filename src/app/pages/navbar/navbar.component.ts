

import { Component, Input, HostListener } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() collapsed: boolean = false;

  constructor(private router: Router) { }

  navLinks = [
    { path: '/dashboard', icon: 'fa-gauge', title: 'Dashboard' },
    { path: '/user', icon: 'fa-user', title: 'Public Profile' },
    { path: '/settings', icon: 'fa-gear', title: 'My Account' },
    { path: '/network', icon: 'fa-wifi', title: 'Network' },
    { path: '/qrcode', icon: 'fa-qrcode', title: 'Authentication' },
    { path: '/store', icon: 'fa-store', title: 'Store Client' },
    { path: '/reports', icon: 'fa-chart-bar', title: 'Reports' },
    { path: '/team', icon: 'fa-user-friends', title: 'Adminstration' }
  ];

  onLogout(): void {
    this.router.navigateByUrl('/login');
  }
  toDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
