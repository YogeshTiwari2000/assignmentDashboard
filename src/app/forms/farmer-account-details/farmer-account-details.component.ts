
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-farmer-account-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSlideToggleModule],
  templateUrl: './farmer-account-details.component.html',
})
export class FarmerAccountDetailsComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() stepper!: MatStepper;

  get sameAsResidence(): boolean {
    return this.formGroup.get('sameAsResidence')?.value;
  }

  onToggleSameAddress(value: boolean) {
    this.formGroup.get('sameAsResidence')?.setValue(value);

    if (value) {
      const residence = this.formGroup.get('residenceAddress')?.value || '';
      this.formGroup.get('permanentAddress')?.setValue(residence);
    } else {
      this.formGroup.get('permanentAddress')?.reset();
    }
  }
}
