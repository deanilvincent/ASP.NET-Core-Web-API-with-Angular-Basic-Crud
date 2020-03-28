import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-customer-modal',
  templateUrl: './delete-customer-modal.component.html',
  styleUrls: ['./delete-customer-modal.component.css']
})
export class DeleteCustomerModalComponent implements OnInit {
  @Input() valuesForDeleteModal: any = {}
  @Output() cancelDeleteModal = new EventEmitter()
  @Output() reloadTable = new EventEmitter()

  constructor(private customerService: CustomerService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  close() {
    this.cancelDeleteModal.emit(false)
  }

  delete() {
    this.customerService.deleteCustomerById(this.valuesForDeleteModal.id).subscribe(response => {
      this.toastr.success('Success!', response)
      this.cancelDeleteModal.emit(false)
      this.reloadTable.emit()
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }
}
