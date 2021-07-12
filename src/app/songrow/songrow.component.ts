import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { DateTime, Duration }from "luxon";
import { MusicService } from '../music.service';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-songrow',
  templateUrl: './songrow.component.html',
  styleUrls: ['./songrow.component.scss']
})
export class SongrowComponent implements OnInit {
  @Input() song!: Song
  @Input() index!: number
  date = DateTime.now().toISODate()

  constructor(private musicService:MusicService, private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this.getAlbumInfoFromSpotify()
  }

  formatTime(time: number): string {
    return Duration.fromObject({seconds: time}).toFormat("m:ss")
  }

  toolTip() {
    if (this.song.liked) {
      return "Remove like from song"
    } else {
      return "Like song"
    }
  }

  likeSong() {
    this.musicService.updateSongLike(this.song.id, !this.song.liked)
  }

  getAlbumInfoFromSpotify() {
    this.spotifyService.getAlbumInfo(this.song.album).subscribe((albumInfo:any) => {
      albumInfo['albums']['items'].forEach((album:any) => {
        album['artists'].forEach((artist:any) => {
          if (artist['name'] === this.song.artist) {         
            this.song.album_images = album['images'];
          }
        })
      })
    })
  }

}
