import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../interfaces/artist';
// import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artistcard',
  templateUrl: './artistcard.component.html',
  styleUrls: ['./artistcard.component.scss']
})
export class ArtistcardComponent implements OnInit {
  @Input() artist!: Artist
  image = ''

  constructor() { }

  ngOnInit(): void {
    if (this.artist.images.length > 0) {
      this.image = this.artist.images[0].url
    } else {
      this.image = `https://via.placeholder.com/300?text=${this.artist.name}`
    }
    console.log(this.artist)
  }


}
