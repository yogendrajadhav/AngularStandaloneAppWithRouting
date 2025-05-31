import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd, NavigationStart, NavigationError, Event, RouterModule, RouterOutlet } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'AngularStandaloneAppWithRouting';
  loading$: BehaviorSubject<boolean>;

  constructor(private loadingService: LoadingService, private router: Router) {
    // Create a BehaviorSubject to hold the loading state
    // Initialize loading$ with the loading service's loading BehaviorSubject
    this.loading$ = this.loadingService.loading;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      // Check if the event is a NavigationStart event
      if (event instanceof NavigationStart) {
        // Show the loading indicator when navigation starts
        this.loadingService.show();
      }
      else if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        // Hide the loading indicator when navigation ends, is cancelled, or encounters an error
        this.loadingService.hide();
      }
    });
  }

}
