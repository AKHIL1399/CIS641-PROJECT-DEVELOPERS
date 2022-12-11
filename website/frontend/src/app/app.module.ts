import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLogoutComponent } from './navbar-logout/navbar-logout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { IndexComponent } from './index/index.component';
import { CalculationComponent } from './calculation/calculation.component';
import { LoginComponent } from './login/login.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { SignUpCustomerComponent } from './sign-up-customer/sign-up-customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingUpComponent } from './sing-up/sing-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageUserComponent } from './manage-user/manage-user.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarTeamComponent } from './navbar-team/navbar-team.component';
import { NavbarCustomerComponent } from './navbar-customer/navbar-customer.component';
import { PreCheckComponent } from './pre-check/pre-check.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule } from '@angular/material/datepicker';


import { MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import {UserService} from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDailogComponent } from './confirm-dailog/confirm-dailog.component';
import { CartComponent } from './cart/cart.component';
import { CustomerRattingComponent } from './customer-ratting/customer-ratting.component';
import { StarRatingModule } from 'angular-star-rating';
import { PaymentComponent } from './payment/payment.component';
import { MyordersComponent } from './myorders/myorders.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarLogoutComponent,
    ContactUsComponent,
    GalleryComponent,
    AboutUsComponent,
    FaqComponent,
    IndexComponent,
    CalculationComponent,
    LoginComponent,
    SignUpAdminComponent,
    SignUpCustomerComponent,
    SingUpComponent,
    ManageUserComponent,
    NavbarAdminComponent,
    NavbarTeamComponent,
    NavbarCustomerComponent,
    PreCheckComponent
   , ConfirmDailogComponent, CartComponent, CustomerRattingComponent, PaymentComponent, MyordersComponent, UsersComponent
  ], 

  imports: [
    BrowserModule,StarRatingModule,
    AppRoutingModule,
    MatDatepickerModule,MatNativeDateModule ,MatFormFieldModule
    ,NgbModule,FormsModule,ReactiveFormsModule ,MatTableModule,MatIconModule,MatButtonModule,MatDialogModule,HttpClientModule,MatPaginatorModule,
    BrowserAnimationsModule, ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDailogComponent,CustomerRattingComponent,PaymentComponent]
})
export class AppModule { }
