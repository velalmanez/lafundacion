import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabCdmx } from './lab-cdmx';

describe('LabCdmx', () => {
  let component: LabCdmx;
  let fixture: ComponentFixture<LabCdmx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabCdmx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabCdmx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
