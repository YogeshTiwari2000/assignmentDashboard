import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerIdFormComponent } from './farmer-id-form.component';

describe('FarmerIdFormComponent', () => {
  let component: FarmerIdFormComponent;
  let fixture: ComponentFixture<FarmerIdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerIdFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerIdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
