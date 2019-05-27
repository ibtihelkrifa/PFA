import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertnavbarComponent } from './vertnavbar.component';

describe('VertnavbarComponent', () => {
  let component: VertnavbarComponent;
  let fixture: ComponentFixture<VertnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
