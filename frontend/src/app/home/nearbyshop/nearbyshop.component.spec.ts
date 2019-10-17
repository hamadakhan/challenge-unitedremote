import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyshopComponent } from './nearbyshop.component';

describe('NearbyshopComponent', () => {
  let component: NearbyshopComponent;
  let fixture: ComponentFixture<NearbyshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
