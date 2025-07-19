
import { IUser } from '../../reuseable components/user-table/user-table.component';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private router = inject(Router);

  user: IUser | null = null;

  ngOnInit() {

    const stored = localStorage.getItem('selectedUser');
    if (stored) {
      this.user = JSON.parse(stored);
    }
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}
