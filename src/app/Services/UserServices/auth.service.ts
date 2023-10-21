import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseURl+'V1/Authentication/';
 // private baseUrl = 'http://localhost:9091/V1/Authentication/';

  constructor(private http: HttpClient) { }
  login(authentificationRequest: any) : Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseUrl+'connect', authentificationRequest, { observe: 'response' });
  }

  addUser(userAdd: any) : Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseUrl+'Signup', userAdd, { observe: 'response' });
  }
}
