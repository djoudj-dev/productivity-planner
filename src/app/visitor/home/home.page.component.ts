import { Component, signal } from '@angular/core';
import { HomeBannerDumbComponent } from './home-banner/home-banner.dumb.component';
import { HomeFeatureCardListDumbComponent } from './home-feature-card-list/home-feature-card-list.dumb.component';

@Component({
  standalone: true,
  imports: [HomeBannerDumbComponent, HomeFeatureCardListDumbComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
})
export class HomePageComponent {
  featureCardList = signal([
    {
      name: 'Planifier sa semaine',
      icon: 'calendar',
      description: 'Visibilité sur les 7 prochains jours',
    },
    {
      name: 'Atteindre ses objectifs',
      icon: 'target',
      description: 'Suivi de ses objectifs',
    },
    {
      name: 'Analyser sa productivité',
      icon: 'chart-line',
      description: 'Suivi de votre productivité et de vos objectif',
    },
  ]);

  // onBannerClicked
  onBannerClicked() {
    console.log('Banner clicked');
  }
}
