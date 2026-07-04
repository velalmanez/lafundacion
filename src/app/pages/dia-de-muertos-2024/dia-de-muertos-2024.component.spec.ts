import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDeMuertos2024Component } from './dia-de-muertos-2024.component';

describe('DiaDeMuertos2024Component', () => {
  let component: DiaDeMuertos2024Component;
  let fixture: ComponentFixture<DiaDeMuertos2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaDeMuertos2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaDeMuertos2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
