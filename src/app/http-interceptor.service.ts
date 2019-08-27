import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceService } from 'src/app/invoice.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private invocieService: InvoiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      headersConfig['Authorization'] = `bearer ${token}`
    }
    const _req = req.clone({ setHeaders: headersConfig });
    return next.handle(_req);
  }
}