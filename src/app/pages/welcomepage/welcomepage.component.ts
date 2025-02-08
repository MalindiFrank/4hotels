import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  imports: [CommonModule, RouterModule],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {

  // constructor(
  //   router: RouterLink
  // ){}

}
