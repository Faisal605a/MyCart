import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
 //TODO: Get the product list
       this.productService.getProducts().subscribe(
    data=>{
      console.log(data)
      this.products = data;

    });
  }

  addToCart(product: Product, amount: any): void {
    const cartProductPayload = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      description:"",
      amount: parseInt(amount)
    };

    this.cartService.addToCart(cartProductPayload, amount);
  }
}
