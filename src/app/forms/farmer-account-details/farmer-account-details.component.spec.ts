import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAccountDetailsComponent } from './farmer-account-details.component';

describe('FarmerAccountDetailsComponent', () => {
  let component: FarmerAccountDetailsComponent;
  let fixture: ComponentFixture<FarmerAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerAccountDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
