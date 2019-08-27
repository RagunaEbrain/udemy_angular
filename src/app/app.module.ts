import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceBuilderComponent } from './invoice-builder/invoice-builder.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InvoiceListingComponent } from './invoice-listing/invoice-listing.component';
import { ClientListingComponent } from './client-listing/client-listing.component';
import { InvoiceService } from 'src/app/invoice.service';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { AuthComponent } from './auth/auth.component';
import { TokenInterceptorService } from 'src/app/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceBuilderComponent,
    MainContentComponent,
    InvoiceListingComponent,
    ClientListingComponent,
    InvoiceFormComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  },
    InvoiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
