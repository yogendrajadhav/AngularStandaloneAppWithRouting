import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'analytics',
        loadComponent: () =>import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  }
];
