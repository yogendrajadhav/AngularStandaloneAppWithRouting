import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

   user: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    // Access route parameters or data here
    console.log('User data:', this.user);
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
    });
  }
}
