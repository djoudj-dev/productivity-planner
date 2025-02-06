import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FeatureCardList } from './home-feature-card-list.type';

@Component({
  selector: 'app-home-feature-card-list',
  imports: [],
  templateUrl: './home-feature-card-list.dumb.component.html',
  styleUrl: './home-feature-card-list.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFeatureCardListDumbComponent {
  readonly featureCardList = input.required<FeatureCardList>();
}
