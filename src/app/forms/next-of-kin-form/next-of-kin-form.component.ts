import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-next-of-kin-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './next-of-kin-form.component.html',
})
export class NextOfKinFormComponent implements OnInit {
  form!: FormGroup;
  @Input() stepper!: MatStepper;//
  districts = ['Kiambu', 'Nakuru', 'Muranga', 'Nyeri'];
  locations = ['Kabete', 'Naivasha', 'Thika', 'Nyahururu'];
  issuePlaces = ['Nairobi', 'Mombasa', 'Eldoret'];

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('',),
      AadharId: new FormControl('',),
      district: new FormControl('',),
      serialNo: new FormControl(''),
      division: new FormControl(''),
      dob: new FormControl('',),
      location: new FormControl(''),
      gender: new FormControl('',),
      idSubLocation: new FormControl(''),
      birthDistrict: new FormControl(''),
      dateOfIssue: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.stepper.next();
  }


}