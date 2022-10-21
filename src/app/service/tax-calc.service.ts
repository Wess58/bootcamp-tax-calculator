import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaxCalcService {

  baseUrl: string = environment.API_ENDPOINT;

  constructor(
    private httpClient: HttpClient
  ) { }

  calculateNetSalary(grossObject: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/tax/resolve', grossObject, { observe: 'response' });
  }


}
