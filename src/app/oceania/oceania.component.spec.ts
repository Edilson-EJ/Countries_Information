import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaComponent } from './oceania.component';

describe('OceaniaComponent', () => {
  let component: OceaniaComponent;
  let fixture: ComponentFixture<OceaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OceaniaComponent]
    });
    fixture = TestBed.createComponent(OceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
