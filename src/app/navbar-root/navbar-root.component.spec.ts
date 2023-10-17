import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRootComponent } from './navbar-root.component';

describe('NavbarRootComponent', () => {
  let component: NavbarRootComponent;
  let fixture: ComponentFixture<NavbarRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarRootComponent]
    });
    fixture = TestBed.createComponent(NavbarRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
