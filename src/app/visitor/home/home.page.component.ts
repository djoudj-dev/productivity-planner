import { Component } from '@angular/core';
import { HomeBannerDumbComponent } from './home-banner/home-banner.dumb.component';

@Component({
  standalone: true,
  imports: [HomeBannerDumbComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
})
export class HomePageComponent {
  // onBannerClicked
  onBannerClicked() {
    console.log('Banner clicked');
  }
}
