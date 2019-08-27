import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceBuilderComponent } from 'src/app/invoice-builder/invoice-builder.component';
import { MainContentComponent } from 'src/app/main-content/main-content.component';
import { InvoiceListingComponent } from 'src/app/invoice-listing/invoice-listing.component';
import { ClientListingComponent } from 'src/app/client-listing/client-listing.component';
import { InvoiceFormComponent } from 'src/app/invoice-form/invoice-form.component';
import { AuthComponent } from 'src/app/auth/auth.component';


const routes: Routes = [
  {
    path : '',
    component : MainContentComponent
  },
  {
    path:'invoice-builder',
    component: InvoiceBuilderComponent
  },
  {
    path : 'invoice-listing',
    component : InvoiceListingComponent
  },
  {
    path : 'invoiceForm',
    component : InvoiceFormComponent
  },
  {
    path : 'invoiceForm/:id',
    component : InvoiceFormComponent
  },
  {
    path : 'client-listing',
    component : ClientListingComponent
  },
  {
    path : 'signup',
    component : AuthComponent
  },
  {
    path : 'login',
    component : AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
