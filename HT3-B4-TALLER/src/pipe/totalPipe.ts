import { Pipe, PipeTransform } from "@angular/core";
import { ItemCart } from "../model/cartModel";

@Pipe({
    name: 'totalcart',
    pure: false
})

export class totalCart implements PipeTransform {
    transform(items: ItemCart[]): number {
        if (!items || items.length === 0) return 0;
        return items.reduce((acc, item) => acc + (item.product.price * item.amount), 0);
        
    }
}