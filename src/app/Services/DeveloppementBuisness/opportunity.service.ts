import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Opportunity} from "../../Models/DeveloppementBusiness/Opportunity";


@Injectable({
  providedIn: 'root'
})
export class OpportunityService  {
  private baseurl = environment.baseURl + '/api/opportunity/'


  constructor(private http: HttpClient) { }
  afficherToutOpportunityParEntreprise():Observable<Opportunity[]>{
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.get<Opportunity[]>(this.baseurl+'getallopportunitybyid/'+parsedValue);
  }
  afficherOpportunityParId(id:any):Observable<Opportunity>{
    return this.http.get<Opportunity>(this.baseurl+'getopportunitybyid/'+id);
  }
  ajouterOpportunity(data: any) {
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.post(this.baseurl + 'addopportunity/' + parsedValue, data);
  }
  modifierOpportunity(id:any,data:any):Observable<Opportunity>{
    return this.http.patch<Opportunity>(this.baseurl+'updateopportunity/'+id,data);
  }
}
