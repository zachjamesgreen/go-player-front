import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component'
import { ArtistComponent } from './artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { SongsComponent } from './songs/songs.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'liked', component: LikedSongsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
