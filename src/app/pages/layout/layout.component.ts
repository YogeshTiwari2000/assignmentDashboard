import { ApiServiceService } from './../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopbarComponent } from "../../reuseable components/topbar/topbar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, DashboardComponent, RouterLink, NavbarComponent, TopbarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isMenuOpen = false;
  isAnimatingIn = false;
  isSticky: boolean = false;
  currentTitle: string = '';
  loggedInUserName: string = '';
  openIndex: number | null = null;
  isCollapsedDesktop = false;

  constructor(private apiService: ApiServiceService, private router: Router) {

  }


  toggleDropdown(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  ngOnInit(): void {
    this.getUserFromLocalStorage();
  }

  private getUserFromLocalStorage(): void {

    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        this.loggedInUserName = parsedUser?.userName || 'Guest';
      } catch (e) {
        console.error('Error parsing user data:', e);
        this.loggedInUserName = 'Guest';
      }
    } else {
      this.loggedInUserName = 'Guest';
    }
  }
  toggleDesktopSidebar() {
    this.isCollapsedDesktop = !this.isCollapsedDesktop;
  }

  toggleSidebar() {
    if (this.isMenuOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }

  private openSidebar() {
    this.isAnimatingIn = true;
    this.isMenuOpen = true;
  }

  private closeSidebar() {
    this.isAnimatingIn = false;
    setTimeout(() => {
      this.isMenuOpen = false;
    }, 300);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isSticky = window.scrollY > 0;
  }
}
