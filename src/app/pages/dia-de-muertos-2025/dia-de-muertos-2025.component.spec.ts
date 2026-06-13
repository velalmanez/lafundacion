import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDeMuertos2025Component } from './dia-de-muertos-2025.component';

describe('DiaDeMuertos2025Component', () => {
  let component: DiaDeMuertos2025Component;
  let fixture: ComponentFixture<DiaDeMuertos2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaDeMuertos2025Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaDeMuertos2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
