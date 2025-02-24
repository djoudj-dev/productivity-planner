import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationService } from '../../core/authentication.service';
import { SignupPageComponent } from './signup.page.component';

describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupPageComponent],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            // Ajoutez ici les méthodes mock dont vous avez besoin
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
