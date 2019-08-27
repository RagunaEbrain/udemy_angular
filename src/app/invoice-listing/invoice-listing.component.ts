import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {

  invoiceArray = [];
  id : any;

  constructor(private invocieService: InvoiceService) { }

  ngOnInit() {
    this.invocieService.getInvoices().subscribe( data => {
    this.invoiceArray = data;
    console.log(this.invoiceArray);
    })
  }

  deleteUser(id){
    this.id = id;
    console.log(this.id);
    this.invocieService.deleteInvoices(this.id).subscribe(data => {
      console.log(data);
    },err =>{
      console.log(err);
    })
  }

}
