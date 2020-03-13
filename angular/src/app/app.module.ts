import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from '../app/customer/create-customer/create-customer.component'
import { NavbarComponent } from '../app/layout/navbar/navbar.component'
import { appRoutes } from './route'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomerService } from 'src/services/customer.service';
import { ListOfCustomerComponent } from './customer/list-of-customer/list-of-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { DeleteCustomerModalComponent } from './customer/delete-customer-modal/delete-customer-modal.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      CreateCustomerComponent,
      EditCustomerComponent,
      DeleteCustomerModalComponent,
      ListOfCustomerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgHttpLoaderModule.forRoot(),

      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 3000,
         positionClass: 'toast-top-center',
         preventDuplicates: true,
      }),
      FormsModule
   ],
   providers: [
      CustomerService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
