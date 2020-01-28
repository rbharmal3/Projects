import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsoonSaleComponent } from './monsoon-sale.component';

describe('MonsoonSaleComponent', () => {
  let component: MonsoonSaleComponent;
  let fixture: ComponentFixture<MonsoonSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsoonSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsoonSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
