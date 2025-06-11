import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="alert alert-success text-center">
            <h1>🎉 Bienvenue !</h1>
            <p>Votre inscription a été réalisée avec succès.</p>
            <p>Vous êtes maintenant connecté à votre dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class DashboardPageComponent {}
