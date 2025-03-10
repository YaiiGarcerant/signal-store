import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./cart.component'),
    },
    {path:'cart', loadChildren: () => import('./cart.component')},
    {
        path:'**',
        redirectTo:'',
    }
] as unknown as Routes;