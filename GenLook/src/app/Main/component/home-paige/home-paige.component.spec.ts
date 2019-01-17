import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaigeComponent } from './home-paige.component';

describe('HomePaigeComponent', () => {
  let component: HomePaigeComponent;
  let fixture: ComponentFixture<HomePaigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePaigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePaigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
