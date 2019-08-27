import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  ticketId: number;
  item :string;

  public UserData : any = {};
  public invoiceArray : any = [];
  getSingleInvoice : any
  id : any;
  // @ViewChild('usrform') mytemplateForm: NgForm;

  constructor(private invocieService: InvoiceService,
              private route: ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.editBLog(this.id);
    this.getUser();
  }

  editBLog(id) {
    if (this.id) {
      console.log(this.id);
      this.invocieService.getSingleInvoices(this.id).subscribe(
        res => {
          console.log(res);
          this.UserData = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

getUser(){
  this.invocieService.getInvoices().subscribe( data => {
    this.invoiceArray = data;
    console.log(this.invoiceArray);
    for(let i = 0; i < this.invoiceArray.length; i++ ){
this.getSingleInvoice = this.invoiceArray[i].item;
    }
    this.item = this.getSingleInvoice.substring(2);
    console.log(this.item);
    this.getData();
    })
}


  getData(){
  if(this.id){
  this.invocieService.updateInvoices(this.id, this.UserData).subscribe(data => {
    console.log(data);
  },err => {
    console.log(err);
  })
    }else{
      let a = 'AA';
      this.ticketId = parseInt(this.item) + 1;
      console.log(this.ticketId);
//       var result = parseInt("1") + parseInt("2");
// console.log(result );
      this.UserData.item = a + this.ticketId;
      console.log(this.UserData.item);
      this.invocieService.addInvoices(this.UserData).subscribe(data =>{
        console.log(data);
        // this.router.navigate(['/invoice-listing']);
      },err =>{
        console.log(err);
      }
    )
    }

  }

}
