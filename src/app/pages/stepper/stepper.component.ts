import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FarmerIdFormComponent } from "../../forms/farmer-id-form/farmer-id-form.component";
import { FarmerAccountDetailsComponent } from "../../forms/farmer-account-details/farmer-account-details.component";
import { NextOfKinFormComponent } from "../../forms/next-of-kin-form/next-of-kin-form.component";
import { DocumentUploadFormComponent } from "../../forms/document-upload-form/document-upload-form.component";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, FarmerIdFormComponent, FarmerAccountDetailsComponent, NextOfKinFormComponent, DocumentUploadFormComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    bank: ['', Validators.required],
    branch: ['', Validators.required],
    bankAccount: ['', Validators.required],
    mainContact: ['', Validators.required],
    mpessaMobile: ['', Validators.required],
    kraPin: ['', Validators.required],
    residenceAddress: ['', Validators.required],
    sameAsResidence: [false],
    permanentAddress: ['']
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;
}