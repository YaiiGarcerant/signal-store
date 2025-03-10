import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductsDetailStateService]
})
export default class ProductDetailComponent {


  productDetailsState = inject(ProductsDetailStateService).state;
  cartState = inject(CartStateService).state;

  id = input.required<string>();
  

  constructor(){
    effect(()=>{
      console.log(this.id())
      this.productDetailsState.getById(this.id())
    });
  }

}
