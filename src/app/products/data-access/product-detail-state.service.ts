import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import { ProductsService } from "./products.service";
import { map } from "rxjs/internal/operators/map";
import { signalSlice } from 'ngxtension/signal-slice'
import { catchError, Observable, of, startWith, Subject, switchMap } from "rxjs";
interface State {
    product: Product | null,
    status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsDetailStateService {
    private productsService = inject(ProductsService)

    private initialState: State = {
        product: null,
        status: 'loading' as const,
    };

    // changePage$ = new Subject<number>();

    // loadProducts$ = this.changePage$.pipe(
    //     startWith(1),
    //     switchMap((page) => this.productsService.getProducts(page)),
    //     map((products) => ({ products, status: 'success' as const })),
    //     catchError(()=>{
    //         return of({
    //             products: [],
    //             status: 'error' as const,
    //         });
    //     })
    // );

    state = signalSlice({
        initialState: this.initialState,
        actionSources: {
            getById: (_state, $: Observable<string>) =>
                $.pipe(
                    switchMap((id) => this.productsService.getProduct(id)), // getProduct(id) debe devolver un solo producto
                    map((data: Product) => ({ product: data, status: 'success' as const }))
                ),
        },
    });
    
    
}