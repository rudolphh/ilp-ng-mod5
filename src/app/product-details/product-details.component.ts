import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product : Product = {};

  constructor(
    private productService : ProductService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {

    let stringId = this.route.snapshot.paramMap.get('id');
    if(stringId) {
      let id = parseInt(stringId);
      this.product = this.productService.getProduct(id);
    }
  }

}
