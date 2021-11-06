import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { Duration }from "luxon";
import { MusicService } from '../music.service';
// import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-songrow',
  templateUrl: './songrow.component.html',
  styleUrls: ['./songrow.component.scss']
})
export class SongrowComponent implements OnInit {
  @Input() song!: Song
  @Input() index!: number
  @Input() liked: boolean = false
  image = ''
  // date = DateTime.now().toISODate()

  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
    if (this.song.album.images.length > 0) {
      this.image = this.song.album.images[0].url
    } else {
      this.image = `https://via.placeholder.com/300`
    }
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

  likeSong(e: any) {
    e.stopPropagation();
    if (this.song.liked) {
      this.musicService.unlike(this.song.id).subscribe(() => {
        this.song.liked = false;
      })
    } else if (!this.song.liked) {
      this.musicService.like(this.song.id).subscribe(() => {
        this.song.liked = true;
      })
    }
  }
}
