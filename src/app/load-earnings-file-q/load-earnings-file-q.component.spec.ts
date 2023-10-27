import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadEarningsFileQComponent } from './load-earnings-file-q.component';

describe('LoadEarningsFileQComponent', () => {
  let component: LoadEarningsFileQComponent;
  let fixture: ComponentFixture<LoadEarningsFileQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadEarningsFileQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadEarningsFileQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
