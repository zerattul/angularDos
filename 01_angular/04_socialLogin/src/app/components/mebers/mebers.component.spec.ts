import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MebersComponent } from './mebers.component';

describe('MebersComponent', () => {
  let component: MebersComponent;
  let fixture: ComponentFixture<MebersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MebersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MebersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
