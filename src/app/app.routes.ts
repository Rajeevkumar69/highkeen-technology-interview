import { Routes } from '@angular/router';

export const routes: Routes = [
     {
          path:'',
          loadComponent:() => import('./user-data/user-data.component').then(com => com.UserDataComponent)
     }
];
