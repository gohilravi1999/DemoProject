import { NgModule } from '@angular/core';
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


const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'publicHomepage', component: PublicHomepageComponent},
  { path: 'userHomepage', component: UserHomepageComponent },
  { path: 'adminHomepage', component: AdminHomepageComponent , children:[
    { path: 'getUser', component: GetUserListComponent },
    { path: 'getProduct', component: GetProductListComponent} ,
    { path: 'addProduct', component: AddProductComponent }]
  },
  { path: '', redirectTo: 'publicHomepage', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent , children:[
    { path: 'editProfile', component: EditProfileComponent },
    { path: 'changePassword', component: ChangePasswordComponent }] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
