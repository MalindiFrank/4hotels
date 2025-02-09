import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayComponent } from "../../components/feedback/display/display.component";
import { FormComponent } from "../../components/feedback/form/form.component";


@Component({
  selector: 'app-welcomepage',
  imports: [CommonModule, RouterModule, DisplayComponent, FormComponent],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {

  constructor(){}

}
