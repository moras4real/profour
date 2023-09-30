import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaroneComponent } from './navbarone/navbarone.component';
import { NavbartwoComponent } from './navbartwo/navbartwo.component';
import { LandpageComponent } from './landpage/landpage.component';
import { PopmapComponent } from './popmap/popmap.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { UserService } from './services/user.service';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopulationComponent } from './population/population.component';
import { FilterContactPipe } from './pipe/filter-contact.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbaroneComponent,
    NavbartwoComponent,
    LandpageComponent,
    PopmapComponent,
    ErrorpageComponent,
    PopulationComponent,
    FilterContactPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule, 
    ReactiveFormsModule   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
