import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'subtotalcart'
})

export class subtotalCart implements PipeTransform {
    transform(price: number, amount: number): number {
        if(!price || !amount) return 0;
        return price * amount;

    }      
}