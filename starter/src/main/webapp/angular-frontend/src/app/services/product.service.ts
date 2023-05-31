import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
  //TODO: Fetch the product list from the API
  console.log("Getting product");
  const requst =  this.http.get<Product[]>("http://localhost:8080/api/get-products",{
     headers:
     { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA==' }
    } )
    console.log(requst);
    return requst;
  }
}
