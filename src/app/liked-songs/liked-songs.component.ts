import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss']
})
export class LikedSongsComponent implements OnInit {

  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
    this.musicService.getLikedSongs().subscribe((songs: any) => {
      console.log(songs);
    });
  }

}
