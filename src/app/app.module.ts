import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { LeftsidebarComponent } from './Shared/leftsidebar/leftsidebar.component';
import { MainSharedComponenetComponent } from './Shared/main-shared-componenet/main-shared-componenet.component';
import { ListeDesBesoinComponent } from './IdentificationBesoin/Besoin/liste-des-besoin/liste-des-besoin.component';
import {HttpClientModule} from "@angular/common/http";
import { AjoutDesBesoinComponent } from './IdentificationBesoin/Besoin/ajout-des-besoin/ajout-des-besoin.component';
import {FormsModule} from "@angular/forms";
import { ModifierDesBesoinComponent } from './IdentificationBesoin/Besoin/modifier-des-besoin/modifier-des-besoin.component';
import { AjoutProfilComponent } from './IdentificationBesoin/Profil/ajout-profil/ajout-profil.component';
import { ListeProfilComponent } from './IdentificationBesoin/Profil/liste-profil/liste-profil.component';
import { ModifierProfilComponent } from './IdentificationBesoin/Profil/modifier-profil/modifier-profil.component';
import { ListeStrategicPlanComponent } from './DeveloppementBuisness/StrategicPlan/liste-strategic-plan/liste-strategic-plan.component';
import { ModifierStrategicPlanComponent } from './DeveloppementBuisness/StrategicPlan/modifier-strategic-plan/modifier-strategic-plan.component';
import { AjouterStrategicPlanComponent } from './DeveloppementBuisness/StrategicPlan/ajouter-strategic-plan/ajouter-strategic-plan.component';
import { AjouterProjectComponent } from './DeveloppementBuisness/Project/ajouter-project/ajouter-project.component';
import { ModifierProjectComponent } from './DeveloppementBuisness/Project/modifier-project/modifier-project.component';
import { ListeProjectComponent } from './DeveloppementBuisness/Project/liste-project/liste-project.component';
import { ListeopportunityComponent } from './DeveloppementBuisness/Opportunity/listeopportunity/listeopportunity.component';
import { AjouteropportunityComponent } from './DeveloppementBuisness/Opportunity/ajouteropportunity/ajouteropportunity.component';
import { ModifieropportunityComponent } from './DeveloppementBuisness/Opportunity/modifieropportunity/modifieropportunity.component';
import {CarouselModule} from "@marcreichel/angular-carousel";
import {OwlCarousel, OwlModule} from "ngx-owl-carousel";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {DragScrollModule} from "ngx-drag-scroll";
import { AddReunionComponent } from './ReunionB2B/add-reunion/add-reunion.component';
import { ListreunionComponent } from './ReunionB2B/listreunion/listreunion.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {DisableControlDirective} from "./ReunionB2B/disable-control.directive";
import {NgxPaginationModule, PaginationControlsComponent} from "ngx-pagination";
import {RichTextEditorModule} from "@syncfusion/ej2-angular-richtexteditor";
import {CommonModule, DatePipe} from "@angular/common";
import { CalendarComponent } from './Calendar/calendar/calendar.component';
import {ToastrModule} from "ngx-toastr";
import {EditReunionComponent} from "./ReunionB2B/edit-reunion/edit-reunion.component";
import { CustomSearchFilterPipe } from './Filters/custom-search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    MainSharedComponenetComponent,
    AddReunionComponent,
    ListreunionComponent,
    CalendarComponent,
    ListeDesBesoinComponent,
    AjoutDesBesoinComponent,
    ModifierDesBesoinComponent,
    AjoutProfilComponent,
    ListeProfilComponent,
    ModifierProfilComponent,
    ListeStrategicPlanComponent,
    ModifierStrategicPlanComponent,
    AjouterStrategicPlanComponent,
    AjouterProjectComponent,
    ModifierProjectComponent,
    ListeProjectComponent,
    ListeopportunityComponent,
    AjouteropportunityComponent,
    ModifieropportunityComponent,
    DisableControlDirective,
    CalendarComponent,
    EditReunionComponent,
    CustomSearchFilterPipe
  ],
  imports: [
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    SlickCarouselModule,
    DragScrollModule,
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    RichTextEditorModule,
    NgxPaginationModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
