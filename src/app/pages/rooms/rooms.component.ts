import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

}

// example
// import { Component } from '@angular/core';
// import { ApiService } from '../../api/api.service';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   imports: [CommonModule],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.css',
// })
// export class DashboardComponent {
//   products: any = [];

//   constructor(private apiService: ApiService, private router: Router) {}

//   async ngOnInit(): Promise<any> {
//     this.products = await this.getProducts();
//   }

//   async getProducts() {
//     return await this.apiService.getAllProducts();
//   }

//   goToProductDetails(id: number): void {
//     this.router.navigate([`products/${id}`]);
//   }

//   async deleleProduct(id: number) {
//     if (id) {
//       this.products.splice(id - 1, 1);
//       return await this.apiService.deleteProduct(id);
//     }
//   }
// }
