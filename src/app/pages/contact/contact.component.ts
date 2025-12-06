import { Component, OnInit, signal } from '@angular/core';
import { Contact } from '../../models/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactSignal = signal<Contact[]>([
    { id: 1, name: 'John Doe', email: 'k1H8j@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'Q2Yg9@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'z6TtX@example.com', phone: '555-555-5555' },
    { id: 4, name: 'Bob Brown', email: 'rA7Qq@example.com', phone: '111-222-3333' },
  ]);
  constructor() { }
  
  ngOnInit(): void {
   
  }

}
