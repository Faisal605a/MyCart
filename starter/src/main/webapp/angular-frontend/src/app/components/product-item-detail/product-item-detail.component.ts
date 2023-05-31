import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product | undefined;
  selectedItem : number ;
  selectedAmount: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { 
    this.selectedItem = 0;
  }

  ngOnInit(): void {
    this.getPageId();
    this.getProduct();
  }

  getProduct(): void {
//TODO: Get the product description
this.productService.getProducts().subscribe(
  data=>{
    console.log(data)
    this.product = data[this.selectedItem-1];

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

  // util
  getPageId(): any {
    console.log( parseInt(this.route.snapshot.paramMap.get('id')!));
    this.selectedItem = parseInt(this.route.snapshot.paramMap.get('id')!);
    return this.selectedItem;
  }
}
