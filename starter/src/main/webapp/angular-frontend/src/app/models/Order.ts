import { Product } from "./Product";

//TODO: Add the contents of the order class
export class Order{
    id:number;
    name:string;
    price:number;
    products:Product[];
    // totalOrder: number;
    

    constructor(){
        this.id = 0;
        this.name ="";
        this.price = 0; 
        this.products=[];
        // this.totalOrder=0;
    }

}