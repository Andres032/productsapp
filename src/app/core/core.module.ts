import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ProductsService
    
  ]
  
})
export class CoreModule { }
