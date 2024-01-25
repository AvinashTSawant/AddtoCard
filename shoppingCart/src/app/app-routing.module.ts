import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  // { path: 'landing', component: LandingComponent },
  // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  // { path: '', redirectTo: '/landing', pathMatch: 'full' },
  // { path: '**', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 