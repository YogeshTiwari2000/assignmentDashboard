

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-document-upload-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './document-upload-form.component.html',
  styleUrl: './document-upload-form.component.css'
})
export class DocumentUploadFormComponent {
  form: FormGroup;
  @Input() stepper!: MatStepper;//

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      indianIdFront: [null],
      indianIdBack: [null],
      nextAadharFront: [null],
      nextKinBack: [null],
      farmerPhoto: [null],
      bankPassbook: [null],
      blackListed: [false],
      inActive: [false],
      chequeApplicable: [false],
      erpCode: ['']
    });
  }

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.form.get(controlName)?.setValue(file);
    }
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
