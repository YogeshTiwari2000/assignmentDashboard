// import { Component, inject, Signal, signal } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { UserTableComponent, IUser } from '../reuseable components/user-table/user-table.component';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule, FormsModule, UserTableComponent],
//   templateUrl: './user-list.component.html'
// })
// export class UserListComponent {
//   private http = inject(HttpClient);

//   users = signal<IUser[]>([]);
//   searchTerm = signal('');

//   constructor() {

//     this.users.set([
//       { id: '1', filedMaster: '02-Dec-23', growerName: 'John Doe' },
//       { id: '2', filedMaster: '03-Dec-23', growerName: 'Jane Smith' },
//       { id: '3', filedMaster: '04-Dec-23', growerName: 'Alice Johnson' },
//       { id: '4', filedMaster: '05-Dec-23', growerName: 'Bob Brown' },
//       { id: '5', filedMaster: '06-Dec-23', growerName: 'Charlie Green' },
//       { id: '6', filedMaster: '07-Dec-23', growerName: 'David White' },
//       { id: '7', filedMaster: '08-Dec-23', growerName: 'Eve Black' },
//       { id: '8', filedMaster: '09-Dec-23', growerName: 'Frank Blue' },
//       { id: '9', filedMaster: '10-Dec-23', growerName: 'Grace Yellow' },
//       { id: '10', filedMaster: '11-Dec-23', growerName: 'Hank Purple' }
//     ])
    
//   }

//   // onView(user: IUser) {
//   //   alert(`View: ${user.name}`);
//   // }

//   // onEdit(user: IUser) {
//   //   alert(`Edit: ${user.name}`);
//   // }

//   // onDelete(user: IUser) {
//   //   const updated = this.users().filter(u => u !== user);
//   //   this.users.set(updated);
//   // }
// }

import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  UserTableComponent,
  IUser
} from '../reuseable components/user-table/user-table.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    UserTableComponent,MatFormFieldModule, MatSelectModule, MatInputModule,NgbDropdownModule
  ],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  private router = inject(Router);
  private http   = inject(HttpClient);

  // signals for table data + search
  users      = signal<IUser[]>([]);
  searchTerm = signal('');

  constructor() {
    // Dummy data matching your fields
    this.users.set([
      { id: '1',  filedMaster: '02-Dec-23',   growerName: 'John Doe'            },
      { id: '2',  filedMaster: '03-Dec-23',   growerName: 'Jane Smith'         },
      { id: '3',  filedMaster: '04-Dec-23',   growerName: 'Alice Johnson'      },
      { id: '4',  filedMaster: '05-Dec-23',   growerName: 'Bob Brown'          },
      { id: '5',  filedMaster: '06-Dec-23',   growerName: 'Charlie Green'      },
      { id: '6',  filedMaster: '07-Dec-23',   growerName: 'David White'        },
      { id: '7',  filedMaster: '08-Dec-23',   growerName: 'Eve Black'          },
      { id: '8',  filedMaster: '09-Dec-23',   growerName: 'Frank Blue'         },
      { id: '9',  filedMaster: '10-Dec-23',   growerName: 'Grace Yellow'       },
      { id: '10', filedMaster: '11-Dec-23',   growerName: 'Hank Purple'        }
    ]);
  }

    foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  onEdit(user: IUser) {
    this.router.navigate(['/users/form'], { state: { user } });
  }

  onDelete(user: IUser) {
    this.users.update(list => list.filter(u => u.id !== user.id));
  }
   onAdd() {
    this.router.navigate(['/users/form']);
  }
}
