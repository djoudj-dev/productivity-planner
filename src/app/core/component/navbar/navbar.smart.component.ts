import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarLogoComponent, RouterLink],
  templateUrl: './navbar.smart.component.html',
  styleUrl: './navbar.smart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSmartComponent {}
