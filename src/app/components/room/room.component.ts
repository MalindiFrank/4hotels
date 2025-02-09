import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [RouterLink],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

}

// example from 4admin
// import { Component } from '@angular/core';
// import { ApiService } from '../../api/api.service';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-product-details',
//   imports: [CommonModule],
//   templateUrl: './product-details.component.html',
//   styleUrl: './product-details.component.css',
// })
// export class ProductDetailsComponent {
//   product: any = {};

//   constructor(
//     private apiService: ApiService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   async ngOnInit(): Promise<any> {
//     this.product = await this.getProduct(this.getProductId());
//   }

//   getProductId() {
//     return this.route.snapshot.params['id'];
//   }

//   async getProduct(id: number | null) {
//     if (id) {
//       return await this.apiService.getOneProduct(id);
//     } else {
//       this.router.navigate(['dashboard']);
//     }
//   }
// }