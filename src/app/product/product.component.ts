import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products : Product[] = [];

  constructor(
    private router: Router,
    private productService : ProductService
    ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onClick(product: Product) : void {
    this.router.navigate(['/products', product.id]);
  }

}
