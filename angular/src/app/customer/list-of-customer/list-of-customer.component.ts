import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr'

@Component({
  selector: 'app-list-of-customer',
  templateUrl: './list-of-customer.component.html',
  styleUrls: ['./list-of-customer.component.css']
})
export class ListOfCustomerComponent implements OnInit {
  customers: any = []
  valuesForDeleteModal: any = {}
  hubConn: HubConnection

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers()
    this.hubConn = new HubConnectionBuilder().withUrl('http://localhost:5000/hub/main').build()
    this.hubConn.start().then(() => console.log('connection started!')).catch(err => console.log(`Error while establishing connection : ${err}`));

    this.hubConn.on('ReceiveChanges', () => {
      this.getCustomers()
    });
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
