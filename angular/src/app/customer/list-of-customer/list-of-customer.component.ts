import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-customer',
  templateUrl: './list-of-customer.component.html',
  styleUrls: ['./list-of-customer.component.css']
})
export class ListOfCustomerComponent implements OnInit {
  customers: any = []
  valuesForDeleteModal: any = {}

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response
    }, error => {
      console.log(error)
    })
  }

  navToEditPage(id: number) {
    this.router.navigate(['/customers/edit', id])
  }

  openDeleteModal(id: number) {
    this.valuesForDeleteModal = {
      id: id,
      isShowDeleteModal: true
    }
  }

  cancelDeleteModal(isCloseModal: boolean) {
    this.valuesForDeleteModal = {
      isShowDeleteModal: isCloseModal
    }
  }

  reloadTable() {
    this.getCustomers()
  }
}
