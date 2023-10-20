import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OurEventComponent} from "./gestionEntreprise/our-event/our-event.component";
import {AddEventComponent} from "./gestionEntreprise/add-event/add-event.component";
import {DetailEventComponent} from "./gestionEntreprise/detail-event/detail-event.component";
import {EventClientComponent} from "./gestionEntreprise/event-client/event-client.component";
import {DetailevntclientComponent} from "./gestionEntreprise/detailevntclient/detailevntclient.component";
import {ListParticipationComponent} from "./gestionEntreprise/list-participation/list-participation.component";
import {ListAllPartComponent} from "./gestionEntreprise/list-all-part/list-all-part.component";
import {DeleteEventComponent} from "./gestionEntreprise/delete-event/delete-event.component";
import {DeletepartComponent} from "./gestionEntreprise/deletepart/deletepart.component";
import {OurserviceComponent} from "./GestionService/ourservice/ourservice.component";
import {DetailServiceComponent} from "./GestionService/detail-service/detail-service.component";
import {AddServiceComponent} from "./GestionService/add-service/add-service.component";
import {DeleteServiceComponent} from "./GestionService/delete-service/delete-service.component";
import {ServiceClientComponent} from "./GestionService/service-client/service-client.component";
import {DetailClientComponent} from "./GestionService/detail-client/detail-client.component";
import {ListServiceComponent} from "./GestionService/list-service/list-service.component";
import {DeleteReservationComponent} from "./GestionService/delete-reservation/delete-reservation.component";


const routes: Routes = [
  {path:'ourevent',component:OurEventComponent},
  {path:'ourservice',component:OurserviceComponent},
  {path:'eventclient',component:EventClientComponent},
  {path:'serviceclient',component:ServiceClientComponent},
  {path:'addevent',component:AddEventComponent},
  {path:'addService',component:AddServiceComponent},
  {path:'detailsevent/:id',component:DetailEventComponent},
  {path:'detailservice/:id',component:DetailServiceComponent},
  {path:'listpart/:id',component:ListParticipationComponent},
  {path:'listRevervation/:id',component:ListServiceComponent},
  {path:'listAllpart',component:ListAllPartComponent},
  {path:'deleteevent/:id',component:DeleteEventComponent},
  {path:'deleteService/:id',component:DeleteServiceComponent},
  {path:'deletepart/:id',component:DeletepartComponent},
  {path:'deleteReservation/:id',component:DeleteReservationComponent},
  {path:'detailseventclient/:id',component:DetailevntclientComponent  },
  {path:'detailservicetclient/:id',component:DetailClientComponent  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
