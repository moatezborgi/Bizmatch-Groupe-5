import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PartServiceService {

  private baseUrl = 'http://localhost:9998';

  constructor(private http: HttpClient) {}

  getChiffresAffairesByCompany(companyId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ChiffresAffaires/${companyId}`);
  }

  // Get Objectifs by Company ID
  getObjectifsByCompany(companyId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/Objectifs/${companyId}`);
  }

  // Add a Contrat
  addContrat(contrat: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/parteneriat`, contrat);
  }

  // Get Contrat by Parteneriat
  getContratByParteneriat(company1: string, company2: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ContratByParteneriat/${company1}/${company2}`);
  }

  // Get Contrat by Entreprise
  getContratByEntreprise(companyId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ContratByEntreprise/${companyId}`);
  }

  // Get Parteneriat by Entreprise
  getParteneriatByEntreprise(companyId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ParteneriatByEntreprise/${companyId}`);
  }

  // Get Parteneriat by 2 Entreprises
  getParteneriatBy2Entreprises(company1: string, company2: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ParteneriatBy2Entreprises/${company1}/${company2}`);
  }
}
