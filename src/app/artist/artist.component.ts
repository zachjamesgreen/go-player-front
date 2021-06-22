import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  songs: Song[] = new Array

  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
  }

  // getSongs() {
  //   this.musicService.getArtistSongs(id)
  //   .subscribe((songs: any) => {
  //     songs.map((song: any) => {
  //       this.songs.push(new Song(song))
  //     })
  //   })
  // }

}
