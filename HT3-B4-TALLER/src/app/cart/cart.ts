import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ItemCart } from '../../model/cartModel';
import { cartService } from '../../service/cartService';
import { subtotalCart } from '../../pipe/subtotalPipe';
import { totalCart } from '../../pipe/totalPipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ CommonModule, subtotalCart, totalCart],
  selector: 'app-cart',
  standalone: true,
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart implements OnInit {

  items: ItemCart[] = [];

  constructor(private CartService: cartService,
              private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.CartService.cart$.subscribe(data => {
      this.items = data;
      this.cdr.detectChanges();
    });
  }

  modifyQuantity(id:  number, event: any) {
    let cant = Number(event.target.value);
    this.CartService.updateAmount(id, cant);
  }

  eliminate(id: number) {
    this.CartService.eliminate(id);
  }
}
