import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MiseenrelationService {

  private baseUrl = environment.baseURl+'V1/MiseEnRelation/';

  constructor(private http: HttpClient) { }
  addCompany(company: any) : Observable<HttpResponse<any>> {
     return this.http.post<any>(this.baseUrl+'addCompany', company, { observe: 'response' });
  }
  getCompany(representantid: any) : Observable<HttpResponse<any>> {
     return this.http.get<any>(this.baseUrl+'getCompanydetailsByrep/'+representantid, { observe: 'response' });
  }
  update(company: any) : Observable<HttpResponse<any>> {
     return this.http.post<any>(this.baseUrl+'updateCompany', company, { observe: 'response' });
  }
  getmatchCompany(domaine:string): Observable<HttpResponse<any>>
  {
    return this.http.get<any>(this.baseUrl+'getmatchCompany/'+domaine, { observe: 'response' });

  }
  addRelationRequest(idemandeur:string,idrecepteur:string): Observable<HttpResponse<any>>
  {
    return this.http.get<any>(this.baseUrl+'addRelationRequest/'+idemandeur+'/'+idrecepteur, { observe: 'response' });

  }
  getDemandeofCompany(companyId:string): Observable<HttpResponse<any>>
  {
    return this.http.get<any>(this.baseUrl+'getDemandeofCompany/'+companyId, { observe: 'response' });

  }
  getDemandereceivedofCompany(companyId:string): Observable<HttpResponse<any>>
  {
    return this.http.get<any>(this.baseUrl+'getDemandereceivedofCompany/'+companyId, { observe: 'response' });

  }

  getDemandeofCompanyAccepted(companyId:string): Observable<HttpResponse<any>>
  {
    return this.http.get<any>(this.baseUrl+'getDemandeofCompanyAccepted/'+companyId, { observe: 'response' });

  }

  acceptrelationRequest(iddemande:string): Observable<HttpResponse<any>>
  {
    return this.http.get<any>(this.baseUrl+'acceptrelationRequest/'+iddemande, { observe: 'response' });
  }
  RefuserelationRequest(iddemande:string): Observable<HttpResponse<any>>
  {
    return this.http.get<any>(this.baseUrl+'RefuserelationRequest/'+iddemande, { observe: 'response' });
  }
}
