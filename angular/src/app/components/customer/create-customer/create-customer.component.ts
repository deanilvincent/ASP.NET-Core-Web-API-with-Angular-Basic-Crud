import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: any = {
    customerId: 0
  }

  constructor(private customerService: CustomerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  submitCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(response => {
      this.toastr.success('Success!', response)
      this.router.navigate(['/customers/list'])
      this.customer = {
        customerId: 0
      }
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }
}
