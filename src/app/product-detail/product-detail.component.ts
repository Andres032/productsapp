import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ProductsService} from './../core/services/products/products.service';
import { Product } from './../product.model';
import {CartService} from './../core/services/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id =params.id;
      this.fetchProduct(id);
      //this.product = this.ProductsService.getProduct(id);
     
    });
  }
  addCart(){
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
    //this.productClicked.emit(this.product.id);
   }
   fetchProduct(id: string){
     this.productsService.getProduct(id)
     .subscribe(product => {
       this.product=product;
     });
   }
   
   crearProduct(){
     const newProduct: Product = {
       id: '222',
       title: 'Bolso',
       image: 'assets/image/11.jpg',
       price: 55000,
       description: 'nuevo producto'
     }
    //this.productsService.createProduct(newProduct)
    //.subscribe(product => {
     // console.log(product);
    //});
   }

   
   
   

}
