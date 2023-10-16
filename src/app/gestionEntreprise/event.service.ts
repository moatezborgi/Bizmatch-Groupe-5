import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evenement} from "../model/Evenement";
import {Participation} from "../model/Participation";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http :HttpClient) { }

  getAllEvenement():Observable<Evenement[]> {
    return this.http.get<Evenement[]>('http://localhost:8070/event/getAll');
  }
  getAllPart():Observable<Participation[]> {
      return this.http.get<Participation[]>('http://localhost:8070/part/getAll');
  }

  getEventbyid(id:any):Observable<Evenement>{
    return this.http.get<Evenement>('http://localhost:8070/event/get/'+id);
  }

  addParticipation(id:any) {

//json-server db.json --watch
    return this.http.post('http://localhost:8070/part/add/1/'+id , "Participation")
  }
  getpartbyevent(id:any):Observable<Participation[]> {
    return this.http.get<Participation[]>('http://localhost:8070/part/getAll/'+id);
  }

  addEvent(Evenement: any) {
//json-server db.json --watch
    return this.http.post('http://localhost:8070/event/add/1 ', Evenement)
  }
  Delete_event(id:any) {
    return this.http.delete('http://localhost:8070/event/delete/'+id);
  }
  Delete_part(id:any) {
    return this.http.delete('http://localhost:8070/part/delete/'+id);
  }
}
