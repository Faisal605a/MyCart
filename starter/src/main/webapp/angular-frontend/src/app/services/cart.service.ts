import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { cartProduct } from '../models/cartProduct';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: cartProduct[] = [];

  constructor(private http: HttpClient) { }

  getCartProducts() {
    return this.cartProducts;
  }

  addToCart(product: Product, amount: any) {
    //TODO: Add item to the cart
     let newCartProduct:cartProduct = new cartProduct()
     newCartProduct.product = product;
     newCartProduct.amount = parseInt(amount);

      let founded = false;
     for (let element of this.cartProducts) {
      if(element.product === product){
        element.amount+=amount;
        founded = true;
        break;
      }
     };
     if(!founded){
        this.cartProducts.push(newCartProduct);
     }


     alert('Added to cart!');
    
    }

  

  clearCart()  {
    this.cartProducts = [];
    return this.cartProducts;
  }

  updateCart(cart: any) {
    this.cartProducts = cart;

    return this.cartProducts;
  }

  submitOrder(order: any): Observable<any> {
   return  this.http.post("http://localhost:8080/orders/submit",order,{
      headers:
      { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA=='}
    })
  //Submit the order information the API
  }
}
