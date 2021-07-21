import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Song } from '../interfaces/song'

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss']
})
export class LikedSongsComponent implements OnInit {
  songs: Song[] = [];
  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
    this.musicService.getLikedSongs().subscribe((songs: any) => {
      songs.map((song: Song) => {   
        this.songs.push(new Song(song))
      })
    });
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
