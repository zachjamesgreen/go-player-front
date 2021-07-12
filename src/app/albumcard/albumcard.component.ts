import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../interfaces/album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-albumcard',
  templateUrl: './albumcard.component.html',
  styleUrls: ['./albumcard.component.scss']
})
export class AlbumcardComponent implements OnInit {
  @Input('album') album!: Album

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.getAlbumInfoFromSpotify();
    
  }

  getAlbumInfoFromSpotify() {
    this.spotifyService.getAlbumInfo(this.album.title).subscribe((albumInfo:any) => {
      albumInfo['albums']['items'].forEach((album:any) => {
        album['artists'].forEach((artist:any) => {
          if (artist['name'] === this.album.artist) {     
            this.album.spotify_images = album['images'];
          }
        })
      })
    })
  }

}


