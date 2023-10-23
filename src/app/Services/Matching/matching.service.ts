import { Injectable } from '@angular/core';
import {environment} from "../../../../src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatchingSystem} from "../../Models/MatchingSystem";


@Injectable({
  providedIn: 'root'
})
export class MatchingService {
  private baseUrl = environment.baseURl + 'Matching/';


  constructor(private http: HttpClient) {
  }

  GetSuggestions(): Observable<MatchingSystem[]> {
    return this.http.get<MatchingSystem[]>(this.baseUrl + 'MatchingSystems');
  }
}
