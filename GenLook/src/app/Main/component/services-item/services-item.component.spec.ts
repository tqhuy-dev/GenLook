import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItemComponent } from './services-item.component';

describe('ServicesItemComponent', () => {
  let component: ServicesItemComponent;
  let fixture: ComponentFixture<ServicesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
