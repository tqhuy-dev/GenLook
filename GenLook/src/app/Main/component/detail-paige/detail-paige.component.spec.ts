import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPaigeComponent } from './detail-paige.component';

describe('DetailPaigeComponent', () => {
  let component: DetailPaigeComponent;
  let fixture: ComponentFixture<DetailPaigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPaigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPaigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
