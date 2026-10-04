import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../model/productsModel";
import { ItemCart } from "../model/cartModel";

@Injectable({
    providedIn: 'root'
})

export class cartService {

    private listCart: ItemCart[] = [];
    private cartSubject = new BehaviorSubject<ItemCart[]>([]);

    cart$ = this.cartSubject.asObservable();

    add(product: Product){

        let inCart = this.listCart.find(i => i.product.id === product.id);

        if(inCart){
            inCart.amount++;
        } else {
            this.listCart.push({ product: product, amount: 1});
        }

        this.cartSubject.next([...this.listCart]);
    }

    eliminate(productId: number) {
        this.listCart = this.listCart.filter(i => i.product.id !== productId);
        this.cartSubject.next(this.listCart);
    }

    updateAmount(productId: number, amount: number) {
        let item = this.listCart.find(i => i.product.id === productId);
        if (item) {
            item.amount = amount;
            if (item.amount <= 0) {
                this.eliminate(productId);
                return;
            }
        }
        this.cartSubject.next([...this.listCart]);
    }
}