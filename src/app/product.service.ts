import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products : Product[] = [{
    id: 1,
    name: "my pillow",
    description: "a soft cuddly pillow",
    price: 36.99
  }];

  constructor() { }

  getProducts() : Product[] {
    return this.products;
  }

  getProduct(id:number) : Product {
    let aProduct = this.products.find(p => { return p.id === id});
    return aProduct ? aProduct : {};
  }
}
