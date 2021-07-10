import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../interfaces/artist';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artistcard',
  templateUrl: './artistcard.component.html',
  styleUrls: ['./artistcard.component.scss']
})
export class ArtistcardComponent implements OnInit {
  @Input() artist!: Artist

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getArtistInfo(this.artist.name).subscribe((artistInfo:any) => {
      this.artist.images = artistInfo.artists.items[0].images;
      console.log(this.artist.images);
      
    })
  }

}
