import { Component } from '@angular/core';
import { Product } from '../../model/productsModel';
import { cartService } from '../../service/cartService';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ CommonModule ],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products {

  listProducts: Product [] = [
    { id: 1, name: 'Modern Loudspeaker', images: 'https://static.kemikcdn.com/2024/09/91K4QfbNuAL.-500x500.jpg', price: 150.00, description: 'Un altavoz moderdo de alta calidad'},
    { id: 2, name: 'Classic Loudspeaker', images: 'https://m.media-amazon.com/images/I/7112sUGjYVL.jpg', price: 200.00, description: 'Un altavos con diseño clasico pero funcionalidad moderna'},
    { id: 3, name: 'Portable Speaker', images: 'https://www.atlantistelecom.com/8732-large_default/altavoz-inalambrico-portatil-head-auto-10-horas-llamadas-true-wireless-stereo-ranura-micro-sd-o85-x-10-cm-ipx7-negro.jpg', price: 100.00, description: 'Un altavos pequeño perfecto para llevar'},
    { id: 4, name: 'Wireless Speaker', images: 'https://static.kemikcdn.com/2024/10/717rMFiG-UL.jpg', price: 250.00, description: 'Un altavoz inalambrico'},
    { id: 5, name: 'Titan Speaker-Man', images: 'https://resources.sanborns.com.mx/medios-plazavip/t1/1737784295DNQNP950568MLM77608087143072024Ojpg', price: 500.00, description: 'Donde esta el Titan Speaker-Man'},
  ];

  constructor(private CartService: cartService) {}

  add(product: Product) {
    this.CartService.add(product);
  }
}
