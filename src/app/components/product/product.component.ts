import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product';
import {HttpClient} from '@angular/common/http'
import { ProductResponseModel } from 'src/app/modals/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = [];
  apiUrl ="https://localhost:44396/api/products/getall"

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.data
    });
  }

}
