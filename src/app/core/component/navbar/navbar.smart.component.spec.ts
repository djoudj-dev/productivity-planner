import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../port/authentication.service';
import { NavbarSmartComponent } from './navbar.smart.component';

describe('NavbarSmartComponent', () => {
  let component: NavbarSmartComponent;
  let fixture: ComponentFixture<NavbarSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSmartComponent, RouterTestingModule],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            register: jest.fn(),
            login: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
