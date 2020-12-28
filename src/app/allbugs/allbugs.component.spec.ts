import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbugsComponent } from './allbugs.component';

describe('AllbugsComponent', () => {
  let component: AllbugsComponent;
  let fixture: ComponentFixture<AllbugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
