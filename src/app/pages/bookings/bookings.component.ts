import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormComponent } from '../../components/feedback/form/form.component';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, RouterLink, FormComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingComponent {

  isActive = false;
  constructor() {}

  toggleFeedback() {
    this.isActive = !this.isActive;
  }
}
