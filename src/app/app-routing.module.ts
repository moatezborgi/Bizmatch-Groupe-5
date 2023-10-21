import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingInComponent} from "./Authentification/sing-in/sing-in.component";
 import {
  EntrepriseDashboardComponent
} from "./MainHome/EntrepriseHome/entreprise-dashboard/entreprise-dashboard.component";
import {CreateaccountComponent} from "./Authentification/createaccount/createaccount.component";
import {AddEntrepriseDataComponent} from "./Entreprise/add-entreprise-data/add-entreprise-data.component";
import {MapsCompanyComponent} from "./Entreprise/maps-company/maps-company.component";
import {ListofconnexionrequestsComponent} from "./Entreprise/listofconnexionrequests/listofconnexionrequests.component";

const routes: Routes = [
  {
    path:"AddEntreprise",
    component:AddEntrepriseDataComponent
  },
  {
    path:"HomeEntreprise",
    component:EntrepriseDashboardComponent
  },
  {
    path:"ListCompany",
    component:MapsCompanyComponent
  },
  {
    path: '', redirectTo: '/Connect', pathMatch: 'full'

  },
  {
    path:"Connect",
    component:SingInComponent
  },
  {
    path:"CreateAccount",
    component:CreateaccountComponent
  },
  {
    path:"DemandeList",
    component:ListofconnexionrequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
