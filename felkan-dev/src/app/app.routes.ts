import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(
            m => m.HomeComponent
        ),
    },
    {
        path: 'fun',
        loadComponent: () => import('./features/fun-museum/fun-museum.component').then(
            m => m.FunMuseumComponent
        )
    },
    {
        path: 'the-wheel',
        loadComponent: () => import('./features/the-wheel/the-wheel.component').then(
            m => m.TheWheelComponent
        )
    }
];