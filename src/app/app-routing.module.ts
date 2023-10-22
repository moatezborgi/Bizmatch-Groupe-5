import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatModuleComponent} from "./chat-module/chat-module.component";
import {EntrepriseDetailsComponent} from "./entreprise-details/entreprise-details.component";
import {SignatureComponent} from "./signature/signature.component";
import {ContratComponent} from "./contrat/contrat.component";

const routes: Routes = [
  {
    path:"chat",component:ChatModuleComponent
  },
  {
    path:"details_entreprise/:id",component:EntrepriseDetailsComponent
  },
  {
    path:"signature/:id",component:SignatureComponent
  },{
    path:"contrat",component:ContratComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
