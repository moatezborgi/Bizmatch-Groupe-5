import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatModuleComponent} from "./chat-module/chat-module.component";
import {EntrepriseDetailsComponent} from "./entreprise-details/entreprise-details.component";

const routes: Routes = [
  {
    path:"chat",component:ChatModuleComponent
  },
  {
    path:"details_entreprise",component:EntrepriseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
