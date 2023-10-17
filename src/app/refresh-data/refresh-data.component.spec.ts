import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshDataComponent } from './refresh-data.component';

describe('RefreshDataComponent', () => {
  let component: RefreshDataComponent;
  let fixture: ComponentFixture<RefreshDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreshDataComponent]
    });
    fixture = TestBed.createComponent(RefreshDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
