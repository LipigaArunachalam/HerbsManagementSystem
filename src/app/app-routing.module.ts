import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [{path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'login',component:LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
