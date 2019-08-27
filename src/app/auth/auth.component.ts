import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

public loginData : any = {};

  constructor(
              private invocieService: InvoiceService,
              private route: ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit() {
  }

onSubmit(){
  this.invocieService.addUserLoign(this.loginData).subscribe(data=>{
    console.log(data);
    localStorage.setItem('token', data.token);
    this.router.navigate(['/invoice-listing']);
  })
}

}
