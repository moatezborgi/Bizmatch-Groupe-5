import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StrategicPlan} from "../../Models/DeveloppementBusiness/StrategicPlan";

@Injectable({
  providedIn: 'root'
})
export class StrategicPlanService {
  private baseurl = environment.baseURl + '/api/strategicplan/'


  constructor(private http: HttpClient) { }
  afficherToutStrategicPlanParEntreprise():Observable<StrategicPlan[]>{
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.get<StrategicPlan[]>(this.baseurl+'getallstrategicplanbyid/'+parsedValue);
  }
  afficherStrategicPlanParId(id:any):Observable<StrategicPlan>{
    return this.http.get<StrategicPlan>(this.baseurl+'getstrategicplanbyid/'+id);
  }
  ajouterStrategicPlan(data: any) {
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.post(this.baseurl + 'addstrategicplan/' + parsedValue, data);
  }
  modifierStrategicPlan(id:any,data:any):Observable<StrategicPlan>{
    return this.http.patch<StrategicPlan>(this.baseurl+'updatestrategicplan/'+id,data);
  }
}
