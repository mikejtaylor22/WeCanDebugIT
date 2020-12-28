import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybugsComponent } from './mybugs.component';

describe('MybugsComponent', () => {
  let component: MybugsComponent;
  let fixture: ComponentFixture<MybugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
