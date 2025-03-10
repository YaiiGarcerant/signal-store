import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers:[ProductsService,ProductsStateService]
})
export default class ProductListComponent {

  productState = inject(ProductsStateService)
  cartState = inject(CartStateService).state;

  changePage(){
    const page = this.productState.state.page() + 1;
    this.productState.changePage$.next(page);
  }

  // private productsService = inject(ProductsService);

  // constructor(){
  //     this.productsService.getProducts().subscribe((products)=>{
  //       console.log(products)
  //     })
  // }


  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }

}
