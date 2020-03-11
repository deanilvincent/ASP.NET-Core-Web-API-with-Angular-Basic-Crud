import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: any = {}

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  customerId: number

  ngOnInit() {
    this.customerId = this.route.snapshot.params.id
    this.getCustomerById(this.customerId)
  }

  getCustomerById(id: number) {
    this.customerService.getCustomerById(id).subscribe(response => {
      this.customer = response
    }, error => {
      console.log(error)
    })
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer, this.customerId).subscribe(() => {
      alert('Successfully updated')
    }, error => {
      console.log(error)
    })
  }

}
