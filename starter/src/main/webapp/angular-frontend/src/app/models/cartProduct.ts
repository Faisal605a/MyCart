import { Product } from "./Product";

export class cartProduct{
    product:Product;
    amount: number;
    

    constructor(){
        this.product = new Product();
        this.amount=0;
        
    }
 
}