import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [CommonModule, RouterLink],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayFeedbackComponent {

}
