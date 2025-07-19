
// import { Component, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-topbar',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './topbar.component.html',
//   styleUrls: ['./topbar.component.css']
// })
// export class TopbarComponent {
//   // Toggle states
//   menuOpen = false;
//   searchMenuOpen = false;
//   notificationsOpen = false;

//   loggedInUserName = 'Anna Adame';
//   userRole = 'Cashier';
//   userAvatarUrl = 'https://www.w3schools.com/howto/img_avatar.png';
//   notificationsCount = 3;

//   constructor(private router: Router) {}

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//   }


//   toggleSearchMenu() {
//     this.searchMenuOpen = !this.searchMenuOpen;
//   }

//   toggleNotifications() {
//     this.notificationsOpen = !this.notificationsOpen;
//   }

//   onSelectSearch(option: string) {
//     console.log('Selected:', option);
//     this.searchMenuOpen = false;
//   }

//   onLogout() {
//     localStorage.removeItem('loggedUser');
//     this.router.navigateByUrl('/login');
//   }

//   toggleDarkMode() {
//     document.documentElement.classList.toggle('dark');
//   }

//   // Close any open dropdown if click happens outside
//   @HostListener('document:click', ['$event'])
//   handleClickOutside(event: MouseEvent) {
//     const target = event.target as HTMLElement;
//     if (!target.closest('.relative')) {
//       this.menuOpen = false;
//       this.searchMenuOpen = false;
//       this.notificationsOpen = false;
//     }
//   }
// }
import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  // emit whenever the burger icon is clicked
  @Output() menuToggle = new EventEmitter<void>();

  // existing toggles
  menuOpen = false;
  searchMenuOpen = false;
  notificationsOpen = false;

  loggedInUserName = 'Anna Adame';
  userRole = 'Cashier';
  userAvatarUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  notificationsCount = 3;

  constructor(private router: Router) { }

  // fire our new event


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuToggle.emit();
  }

  toggleSearchMenu() {
    this.searchMenuOpen = !this.searchMenuOpen;
  }

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
  }

  onSelectSearch(option: string) {
    console.log('Selected:', option);
    this.searchMenuOpen = false;
  }

  onLogout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.menuOpen = false;
      this.searchMenuOpen = false;
      this.notificationsOpen = false;
    }
  }
}
