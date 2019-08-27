import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


const BASE_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpClient: HttpClient) { }

getInvoices() {
  return this.httpClient.get<any>(`${BASE_URL}/invoice-listing`);
}

addInvoices(data) {
  return this.httpClient.post<any>(`${BASE_URL}/invoice-listing`, data);
}

deleteInvoices(id) {
  return this.httpClient.delete<any>(`${BASE_URL}/invoice-listing` + '/' + id);
}

getSingleInvoices(id) {
  return this.httpClient.get<any>(`${BASE_URL}/invoice-listing` + '/' + id);
}

updateInvoices(id, data) {
  return this.httpClient.put<any>(`${BASE_URL}/invoice-listing` + '/' + id, data);
}


addUserSignup(data) {
  return this.httpClient.post<any>(`${BASE_URL}/Users/signup`, data);
}

addUserLoign(data) {
  return this.httpClient.post<any>(`${BASE_URL}/Users/login`, data);
}

}
