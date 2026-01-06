import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {

  // 1️⃣ forkJoin — Wait for all, emit once
    // Runs multiple Observables in parallel and emits only once, after all complete.


// forkJoin({
//   users: this.http.get('/api/users'),
//   orders: this.http.get('/api/orders'),
//   products: this.http.get('/api/products')
// }).subscribe(result => {
//   console.log(result.users);
//   console.log(result.orders);
//   console.log(result.products);
// });

}
