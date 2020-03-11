import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-delete-customer-modal',
  templateUrl: './delete-customer-modal.component.html',
  styleUrls: ['./delete-customer-modal.component.css']
})
export class DeleteCustomerModalComponent implements OnInit {
  @Input() valuesForDeleteModal: any = {}
  @Output() cancelDeleteModal = new EventEmitter()
  @Output() reloadTable = new EventEmitter()

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  close() {
    this.cancelDeleteModal.emit(false)
  }

  delete() {
    this.customerService.deleteCustomerById(this.valuesForDeleteModal.id).subscribe(() => {
      alert('Successfully deleted')
      this.cancelDeleteModal.emit(false)
      this.reloadTable.emit()
    }, error => {
      console.log(error)
    })
  }
}
