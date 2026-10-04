import { Component, signal } from '@angular/core';
import { Cart } from './cart/cart';
import { Products } from './products/products';

@Component({
  imports: [Cart, Products],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('HT3-B4-TALLER');
}
