import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicestableComponent } from './devicetable.component';

describe('DevicestableComponent', () => {
  let component: DevicestableComponent;
  let fixture: ComponentFixture<DevicestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicestableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevicestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
