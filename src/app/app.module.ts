import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { PublicHomepageComponent } from './public-homepage/public-homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { authInterceptorProviders } from './helper/auth.interceptor';
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
import {ChartsModule} from 'ng2-charts';
import { ChartComponent } from './admin-homepage/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginFormComponent,
    PublicHomepageComponent,
    AdminHomepageComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    GetUserListComponent,
    GetProductListComponent,
    AddProductComponent,
    OrderComponent,
    UserOrderComponent,
    PendingOrderComponent,
    ApprovedOrderComponent,
    RejectedOrderComponent,
    CanceledOrderComponent,
    OrderListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
