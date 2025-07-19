import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doughnut2Component } from './doughnut-2.component';

describe('Doughnut2Component', () => {
  let component: Doughnut2Component;
  let fixture: ComponentFixture<Doughnut2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doughnut2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doughnut2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
