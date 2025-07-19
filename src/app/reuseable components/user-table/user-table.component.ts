

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

// export interface IUser {
//   id?: string; // Add optional ID field
//   name: string;
//   email: string;
//   phone?: string;
//   role: string;
//   status: 'Active' | 'Inactive';
// }

// @Component({
//   selector: 'app-user-table',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './user-table.component.html',
//   styleUrls: ['./user-table.component.css']
// })
// export class UserTableComponent {
//   @Input() users: IUser[] = [];
//   @Input() searchTerm: string = '';

//   constructor(private router: Router) { }

//   @Output() view = new EventEmitter<IUser>();
//   @Output() edit = new EventEmitter<IUser>();
//   @Output() delete = new EventEmitter<IUser>();

//   get filteredUsers(): IUser[] {
//     const term = this.searchTerm.toLowerCase();
//     return this.users.filter(user =>
//       user.name.toLowerCase().includes(term) || 
//       user.email.toLowerCase().includes(term)
//     );
//   }

//   goToProfile(user: IUser) {
//     localStorage.setItem('selectedUser', JSON.stringify(user));
//     this.router.navigate(['/profile']);
//   }

//   onEdit(user: IUser) {
//     this.router.navigate(['/users/form'], {
//       state: { user }
//     });
//   }
// }import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Input, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

export interface IUser {
  id?: string;
  filedMaster: string;    // e.g. "02-Dec-23"
  growerName: string;
}

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, FormsModule,MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() users: IUser[] = [];
  @Input() searchTerm: string = '';

  @Output() add    = new EventEmitter<void>();
  @Output() view   = new EventEmitter<IUser>();
  @Output() edit   = new EventEmitter<IUser>();
  @Output() delete = new EventEmitter<IUser>();

  // pagination state
  pageSize = 5;
  currentPage = 1;

  constructor(private router: Router) { }

  // filter by filedMaster or growerName
  get filteredUsers(): IUser[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.users.filter(u =>
      u.filedMaster.toLowerCase().includes(term) ||
      u.growerName.toLowerCase().includes(term)
    );
  }

  // slice for current page
  get pagedUsers(): IUser[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredUsers.length / this.pageSize));
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
 
    goToProfile(user: IUser) {
    localStorage.setItem('selectedUser', JSON.stringify(user));
    this.router.navigate(['/profile']);
  }
}
