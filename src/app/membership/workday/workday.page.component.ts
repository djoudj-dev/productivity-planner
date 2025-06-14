import { Component, inject } from '@angular/core';
import { WorkDayStore } from './workday.page.store';

@Component({
  imports: [],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.scss',
  providers: [WorkDayStore],
})
export class WorkdayPageComponent {
  readonly store = inject(WorkDayStore);
}
