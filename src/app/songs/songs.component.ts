import { Component, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songs: Song[] = new Array

  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
    this.getSongs()
  }

  getSongs() {
    this.musicService.getSongs()
      .subscribe((songs: any) => { 
        songs.map((song: Song) => {
          this.songs.push(new Song(song))
        })
      })
  }

}
