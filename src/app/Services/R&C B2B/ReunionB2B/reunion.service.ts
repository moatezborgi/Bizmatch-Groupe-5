import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reunion} from "../../../Model/Reunion";


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private baseUrl = environment.baseUrl + '/ReunionB2B/';


  constructor(private http: HttpClient) {
  }
  addReunion(data: any): Observable<Reunion> {
    return this.http.post<Reunion>(this.baseUrl + '', data);
  }
  ReunionList(idEntreprise: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.baseUrl + 'ReunionsList/'+idEntreprise);
  }
  ReunionListCal(idEntreprise: any): Observable<Reunion> {
    return this.http.get<Reunion>(this.baseUrl + 'ReunionsList/'+idEntreprise);
  }
  // userlist(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseUrl + 'users');
  // }
  // JustDutylist(): Observable<number[]> {
  //   return this.http.get<number[]>(this.baseUrl + 'lastid');
  // }
  // Usernamelist(): Observable<String[]> {
  //   return this.http.get<String[]>(this.baseUrl + 'username');
  // }
  // DutylistbyUser(username: any): Observable<PlanificationDuty[]> {
  //   return this.http.get<PlanificationDuty[]>(this.baseUrl + 'PlanificationDutylistbyuser/'+username);
  // }
  // getdutyy(id: any): Observable<DutyPlanificationDTO> {
  //   return this.http.get<DutyPlanificationDTO>(this.baseUrl + 'PlanificationDutylistbyid/'+id);
  // }
  //
  // JustaddDuty(data: any): Observable<ReunionB2B> {
  //   return this.http.post<ReunionB2B>(this.baseUrl + 'addDuty/', data);
  // }
  // deleteDuty(id: any) :Observable<any> {
  //   return this.http.delete(this.baseUrl + '' + id);
  // }
  // deleteDutyduty(id: any) :Observable<any> {
  //   return this.http.delete(this.baseUrl + 'removeduty/' + id);
  // }
  // updateDuty(dto: { duty: {  id_duty: number;dateHeureDebut: string; dateHeureFin: string; type: string }}, id: any, username: any):Observable<PlanificationDuty> {
  //   return this.http.put<PlanificationDuty>(this.baseUrl + 'UpdatePlanificationDutyangular/'+id+'/'+username, dto);
  // }
  // updateDutydate(data: any, id: any):Observable<ReunionB2B> {
  //   return this.http.put<ReunionB2B>(this.baseUrl + 'UpdateDuty/'+id, data);
  // }
  // mostuserchange():Observable<any>{
  //   return this.http.get<any>(this.baseUrl + 'mostUserChange');
  // }

}
