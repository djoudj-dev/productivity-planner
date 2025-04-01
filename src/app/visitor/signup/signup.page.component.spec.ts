import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService } from '../../core/port/authentication.service';
import { SignupPageComponent } from './signup.page.component';
import { UserService } from '../../core/port/user.service';

describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupPageComponent, HttpClientTestingModule],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            register: () => ({ subscribe: () => {} }),
          },
        },
        {
          provide: UserService,
          useValue: {
            create: () => ({ subscribe: () => {} }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
