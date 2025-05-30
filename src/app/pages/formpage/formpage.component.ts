import { Component } from '@angular/core';
import { CanExit } from '../../guards/leave-form.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formpage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formpage.component.html',
  styleUrl: './formpage.component.css'
})
export class FormpageComponent implements CanExit {
  dirty = true;
  value='';
  canExit(): boolean {
    console.log('Checking if can exit. Dirty?', this.dirty);
   debugger;
    // If the form is dirty, prompt the user to confirm leaving
    return !this.dirty || confirm('You have unsaved changes. Leave anyway?');
  }
}
