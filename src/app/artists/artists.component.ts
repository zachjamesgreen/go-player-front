import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Artist } from '../interfaces/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = new Array

  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
    this.getArtists()
  }

  getArtists() {
    this.musicService.getArtists()
      .subscribe((artists: any) => {
        artists.map((artist: Artist) => {
          this.artists.push(new Artist(artist))
        })
    })

  }
}
