import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../interfaces/artist';
import { SpotifyService } from '../spotify.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-artistcard',
  templateUrl: './artistcard.component.html',
  styleUrls: ['./artistcard.component.scss']
})
export class ArtistcardComponent implements OnInit {
  @Input() artist!: Artist

  constructor(private spotifyService:SpotifyService, private store:AngularFirestore) { }

  ngOnInit(): void {
    if (this.artist.spotify_id === undefined) {
      this.getSpotifyInfo(this.artist);
    }
    
  }

  getSpotifyInfo(artist: Artist) {
    this.spotifyService.getArtistInfo(artist).subscribe((artistInfo:any) => {
      this.artist.images = artistInfo.artists.items[0].images;
      this.artist.spotify_url = artistInfo.artists.items[0].external_urls.spotify;
      this.artist.spotify_id = artistInfo.artists.items[0].id;
      this.artist.spotify_genres = artistInfo.artists.items[0].genres;
      
      // let str = JSON.stringify(this.song)
      this.store.collection('artists').doc(this.artist.id.toString()).set(Object.assign({}, this.artist))
    });
  }

}
