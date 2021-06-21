import { Component } from '@angular/core';
import { MusicService } from './music.service';
import { Song } from "./interfaces/song"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  songs = new Array;
  constructor(private musicService: MusicService) {

  }

  ngOnInit() {
    // this.getSongs()
  }

  getSongs() {
    this.musicService.getSongs()
      .subscribe((songs: any) => {
        songs.map((song: any) => {
          this.songs.push(new Song(song))
        })
    })
  }

  
}
