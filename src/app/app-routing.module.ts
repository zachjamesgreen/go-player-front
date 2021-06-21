import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
