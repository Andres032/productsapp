import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Product} from './../../../product.model';
import {environment} from './../../../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(
    private http: HttpClient,
    
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api1}/products.json`);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api1}/products/${id}.json`);

  }
 createProduct(product: Product){
   return this.http.post(`${environment.url_api1}/products.json`, product);
 }

 updateProduct(id: string, changes: Partial<Product>){
   return this.http.put(`${environment.url_api1}/products/${id}.json`, changes);

 }

 deleteProduct(id: string){
   return this.http.delete(`${environment.url_api1}/products/${id}.json`);
 }
  
}
