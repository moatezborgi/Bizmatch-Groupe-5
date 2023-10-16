import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OurEventComponent} from "./gestionEntreprise/our-event/our-event.component";
import {OurcofComponent} from "./ourcof/ourcof.component";
import {AddEventComponent} from "./gestionEntreprise/add-event/add-event.component";
import {DetailEventComponent} from "./gestionEntreprise/detail-event/detail-event.component";
import {EventClientComponent} from "./gestionEntreprise/event-client/event-client.component";
import {DetailevntclientComponent} from "./gestionEntreprise/detailevntclient/detailevntclient.component";
import {ListParticipationComponent} from "./gestionEntreprise/list-participation/list-participation.component";
import {ListAllPartComponent} from "./gestionEntreprise/list-all-part/list-all-part.component";
import {DeleteEventComponent} from "./gestionEntreprise/delete-event/delete-event.component";
import {DeletepartComponent} from "./gestionEntreprise/deletepart/deletepart.component";


const routes: Routes = [
  {path:'ourevent',component:OurEventComponent},
  {path:'eventclient',component:EventClientComponent},
  {path:'conf',component:OurcofComponent},
  {path:'addevent',component:AddEventComponent},
  {path:'detailsevent/:id',component:DetailEventComponent},
  {path:'listpart/:id',component:ListParticipationComponent},
  {path:'listAllpart',component:ListAllPartComponent},
  {path:'deleteevent/:id',component:DeleteEventComponent},
  {path:'deletepart/:id',component:DeletepartComponent},
  {path:'detailseventclient/:id',component:DetailevntclientComponent  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
