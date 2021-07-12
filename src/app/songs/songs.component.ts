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

  orderBy(term: string) {
    this.songs.sort((a: Song, b: Song) => {
      let x = Object.getOwnPropertyDescriptor(a, term)?.value
      let y = Object.getOwnPropertyDescriptor(b, term)?.value
      if (term == 'created_at') {
        return new Intl.Collator().compare(y, x)
      } else {
        return new Intl.Collator().compare(x, y)
      }
    })
  }

}
