import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PublicHomepageComponent } from './public-homepage/public-homepage.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { GetUserListComponent } from './admin-homepage/get-user-list/get-user-list.component';
import { GetProductListComponent } from './admin-homepage/get-product-list/get-product-list.component';
import { AddProductComponent } from './admin-homepage/add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { PendingOrderComponent } from './user-order/pending-order/pending-order.component';
import { ApprovedOrderComponent } from './user-order/approved-order/approved-order.component';
import { RejectedOrderComponent } from './user-order/rejected-order/rejected-order.component';
import { CanceledOrderComponent } from './user-order/canceled-order/canceled-order.component';
import { OrderListComponent } from './admin-homepage/order-list/order-list.component';


const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'publicHomepage', component: PublicHomepageComponent},
  { path: 'userHomepage', component: UserHomepageComponent },
  { path: 'adminHomepage', component: AdminHomepageComponent},
  { path: '', redirectTo: 'publicHomepage', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent , children:[
    { path: 'editProfile', component: EditProfileComponent },
    { path: 'changePassword', component: ChangePasswordComponent }] 
  },
  { path: 'getUser', component: GetUserListComponent },
  { path: 'getProduct', component: GetProductListComponent , children:[
    { path: 'addProduct', component: AddProductComponent}
  ]},
  { path: 'order', component: OrderComponent },
  { path: 'adminOrder', component: OrderListComponent },
  { path: 'getUserOrder', component: UserOrderComponent , children:[
    { path: 'pendingOrder', component: PendingOrderComponent},
    { path: 'approvedOrder', component: ApprovedOrderComponent},
    { path: 'rejectedOrder', component: RejectedOrderComponent},
    { path: 'canceledOrder', component: CanceledOrderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
