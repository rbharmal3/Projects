import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSaleComponent } from './service-sale.component';

describe('ServiceSaleComponent', () => {
  let component: ServiceSaleComponent;
  let fixture: ComponentFixture<ServiceSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
