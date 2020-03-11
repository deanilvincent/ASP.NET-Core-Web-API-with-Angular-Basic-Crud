import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: any = {
    customerId: 0
  }

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  submitCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(() => {
      alert('Successfully saved!');
      this.customer = {
        customerId: 0
      }
    }, error => {
      console.log(error)
    })
  }
}
