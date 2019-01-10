import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEventItemComponent } from './year-event-item.component';

describe('YearEventItemComponent', () => {
  let component: YearEventItemComponent;
  let fixture: ComponentFixture<YearEventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearEventItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
