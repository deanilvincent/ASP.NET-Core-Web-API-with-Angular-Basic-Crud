import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: any = {}

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

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
    this.customerService.updateCustomer(this.customer, this.customerId).subscribe(response => {
      this.toastr.success('Success!', response)
      this.router.navigate(['/customers/list'])
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }

}
