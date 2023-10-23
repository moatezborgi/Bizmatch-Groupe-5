import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DecouvertemarcheServiceService {

  private baseUrl = environment.baseURl+'V1/EpansionMarche/';

  constructor(private http: HttpClient) { }
  addmarche(marche: any) : Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseUrl+'addMarche', marche, { observe: 'response' });
  }
  getMarchListbyCompany(companyId: any) : Observable<HttpResponse<any>> {
    return this.http.get<any>(this.baseUrl+'getMarchListbyCompany/'+companyId, { observe: 'response' });
  }
  getMarchListbyCompanynonclot(companyId: any) : Observable<HttpResponse<any>> {
    return this.http.get<any>(this.baseUrl+'getMarchListbyCompanynonclot/'+companyId, { observe: 'response' });
  }
}
