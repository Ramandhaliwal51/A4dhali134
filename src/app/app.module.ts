import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { MatTableModule} from '@angular/material/table';
import { HeaderDhali134Component } from './header-dhali134/header-dhali134.component';
import { PersonalDhali134Component } from './personal-dhali134/personal-dhali134.component';
import { NobelDhali134Component } from './nobel-dhali134/nobel-dhali134.component';
import { PopupbioComponent } from './personal-dhali134/popupbio/popupbio.component';
import { PopupshercredComponent } from './personal-dhali134/popupshercred/popupshercred.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderDhali134Component,
    PersonalDhali134Component,
    NobelDhali134Component,
    PopupbioComponent,
    PopupshercredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,MatButtonModule,MatIconModule,
    MatDialogModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
