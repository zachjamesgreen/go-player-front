import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MusicService } from './music.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { AsideComponent } from './aside/aside.component';
import { NavlinkComponent } from './navlink/navlink.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArtistcardComponent } from './artistcard/artistcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    AsideComponent,
    NavlinkComponent,
    ArtistcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
