import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HomeBannerDumbComponent } from './home-banner/home-banner.dumb.component';
import { HomeFeatureCardListDumbComponent } from './home-feature-card-list/home-feature-card-list.dumb.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBannerDumbComponent, HomeFeatureCardListDumbComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  featureCardList = signal([
    {
      name: 'Planifier sa semaine',
      icon: 'bi-calendar',
      description: 'Visibilité sur les 7 prochains jours',
    },
    {
      name: 'Atteindre ses objectifs',
      icon: 'bi-bullseye',
      description: 'Suivi de ses objectifs',
    },
    {
      name: 'Analyser sa productivité',
      icon: 'bi-graph-up',
      description: 'Suivi de votre productivité et de vos objectif',
    },
  ]);

  // onBannerClicked
  onBannerClicked() {
    // Suppression du console.log
  }
}
