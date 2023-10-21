import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { LeftsidebarComponent } from './Shared/leftsidebar/leftsidebar.component';
import { MainSharedComponenetComponent } from './Shared/main-shared-componenet/main-shared-componenet.component';
import { SingInComponent } from './Authentification/sing-in/sing-in.component';
 import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EntrepriseDashboardComponent } from './MainHome/EntrepriseHome/entreprise-dashboard/entreprise-dashboard.component';
import { AddEntrepriseDataComponent } from './Entreprise/add-entreprise-data/add-entreprise-data.component';
import { CreateaccountComponent } from './Authentification/createaccount/createaccount.component';
import { MapsCompanyComponent } from './Entreprise/maps-company/maps-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import { PopupcompanyComponent } from './Entreprise/popupcompany/popupcompany.component';
import {MatIconModule} from "@angular/material/icon";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import { ListofconnexionrequestsComponent } from './Entreprise/listofconnexionrequests/listofconnexionrequests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    MainSharedComponenetComponent,
    SingInComponent,
    EntrepriseDashboardComponent,
    AddEntrepriseDataComponent,
    CreateaccountComponent,
    MapsCompanyComponent,
    PopupcompanyComponent,
    ListofconnexionrequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false,showError: true},
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
