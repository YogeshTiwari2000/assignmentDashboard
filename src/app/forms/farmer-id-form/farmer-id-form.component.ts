
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-farmer-id-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './farmer-id-form.component.html'
})
export class FarmerIdFormComponent implements OnInit {
  form!: FormGroup;

  @Input() stepper!: MatStepper;//

  districts = ['Kiambu', 'Nakuru', 'Muranga', 'Nyeri'];
  locations = ['Kabete', 'Naivasha', 'Thika', 'Nyahururu'];
  issuePlaces = ['Nairobi', 'Mombasa', 'Eldoret'];

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      kenyanId: new FormControl('',),
      district: new FormControl('',),
      serialNo: new FormControl(''),
      division: new FormControl(''),
      dob: new FormControl(''),
      location: new FormControl(''),
      gender: new FormControl(''),
      idSubLocation: new FormControl(''),
      birthDistrict: new FormControl(''),
      email: new FormControl('',),
      placeOfIssue: new FormControl(''),
      education: new FormControl(''),
      dateOfIssue: new FormControl(''),
      background: new FormControl('')
    });
  }


  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Form submitted:', this.form.value);
    this.stepper.next();
  }
}
