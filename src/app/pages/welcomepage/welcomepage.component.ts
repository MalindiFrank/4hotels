import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayFeedbackComponent } from "../../components/feedback/display/display.component";
import { FormComponent } from "../../components/feedback/form/form.component";


@Component({
  selector: 'app-welcomepage',
  imports: [CommonModule, RouterModule, DisplayFeedbackComponent, FormComponent],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {

  constructor(){}

}
