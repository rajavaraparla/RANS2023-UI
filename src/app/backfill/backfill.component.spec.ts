import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackfillComponent } from './backfill.component';

describe('BackfillComponent', () => {
  let component: BackfillComponent;
  let fixture: ComponentFixture<BackfillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackfillComponent]
    });
    fixture = TestBed.createComponent(BackfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
