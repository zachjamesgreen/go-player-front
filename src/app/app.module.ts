import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MusicService } from './music.service';
import { PlayerService } from './player.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { AsideComponent } from './aside/aside.component';
import { NavlinkComponent } from './navlink/navlink.component';
import { ArtistcardComponent } from './artistcard/artistcard.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumcardComponent } from './albumcard/albumcard.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { SongrowComponent } from './songrow/songrow.component';
import { SongsComponent } from './songs/songs.component';
import { PlayerComponent } from './player/player.component';
import { SongstableComponent } from './songstable/songstable.component';
import { SongtableheaderComponent } from './songtableheader/songtableheader.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';
import { ReadableDatePipe } from './readable-date.pipe';
import { firebaseConfig } from './env';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SongComponent } from './contextmenus/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    AsideComponent,
    NavlinkComponent,
    ArtistcardComponent,
    ArtistComponent,
    AlbumcardComponent,
    AlbumsComponent,
    AlbumComponent,
    SongrowComponent,
    SongsComponent,
    PlayerComponent,
    SongstableComponent,
    SongtableheaderComponent,
    LikedSongsComponent,
    ReadableDatePipe,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [MusicService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
