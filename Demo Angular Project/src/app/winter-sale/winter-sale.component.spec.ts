import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterSaleComponent } from './winter-sale.component';

describe('WinterSaleComponent', () => {
  let component: WinterSaleComponent;
  let fixture: ComponentFixture<WinterSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
