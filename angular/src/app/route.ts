import { CreateCustomerComponent } from './customer/create-customer/create-customer.component'

import { Routes } from '@angular/router'
import { ListOfCustomerComponent } from './customer/list-of-customer/list-of-customer.component'
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component'

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