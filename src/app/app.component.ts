import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'productivity-planner';
  isProductionEnvironment = environment.production;
  firebaseProjectId = environment.firebaseConfig.projectId;
}
