import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/models/icustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.baseUrl}customers`);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${environment.baseUrl}customers/${id}`);
  }

  createCustomer(customer: any) {
    return this.http.post(`${environment.baseUrl}customers`, customer, { responseType: 'text' });
  }

  updateCustomer(customer: any, id: number) {
    return this.http.put(`${environment.baseUrl}customers/${id}`, customer, { responseType: 'text' });
  }

  deleteCustomerById(id: number) {
    alert(id)
    return this.http.delete(`${environment.baseUrl}customers/${id}`, { responseType: 'text' });
  }
}

