import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component'

import { Routes } from '@angular/router'
import { ListOfCustomerComponent } from './components/customer/list-of-customer/list-of-customer.component'
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component'

export const appRoutes: Routes = [
    {
        path: 'customers',
        children: [
            { path: 'list', component: ListOfCustomerComponent },
            { path: 'create', component: CreateCustomerComponent },
            { path: 'edit/:id', component: EditCustomerComponent }
        ]
    }
]