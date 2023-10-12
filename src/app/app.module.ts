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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    MainSharedComponenetComponent,
    ListeDesBesoinComponent,
    AjoutDesBesoinComponent,
    ModifierDesBesoinComponent,
    AjoutProfilComponent,
    ListeProfilComponent,
    ModifierProfilComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
