import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from './cart/cart.module';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'cart',component: CartComponent},
  { path: 'user-info', component: UserInfoFormComponent }, 
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', redirectTo: '/landing' },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CartComponent,
    UserInfoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
