import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Evenement} from "../model/Evenement";
import {HttpClient} from "@angular/common/http";
import {Service} from "../model/Service";
import {Participation} from "../model/Participation";
import {Revervation} from "../model/Revervation";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAllService():Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:8060/service/getAll');
  }
  getservicebyid(id:any):Observable<Service>{
    return this.http.get<Service>('http://localhost:8060/service/get/'+id);
  }
  addService(Service: any) {
//json-server db.json --watch
    return this.http.post('http://localhost:8060/service/add/1 ', Service)
  }
  Delete_service(id:any) {
    return this.http.delete('http://localhost:8060/service/delete/'+id);
  }
  Delete_reservation(id:any) {
    return this.http.delete('http://localhost:8060/reservation/delete/'+id);
  }
  addReservation(id:any) {
    return this.http.post('http://localhost:8060/reservation/add/1/'+id , "reservation")
  }
  getReservationbyservice(id:any):Observable<Revervation[]> {
    return this.http.get<Revervation[]>('http://localhost:8060/reservation/getAll/'+id);
  }
}
