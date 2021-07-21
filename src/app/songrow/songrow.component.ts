import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { Duration }from "luxon";
import { MusicService } from '../music.service';
import { SpotifyService } from '../spotify.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-songrow',
  templateUrl: './songrow.component.html',
  styleUrls: ['./songrow.component.scss']
})
export class SongrowComponent implements OnInit {
  @Input() song!: Song
  @Input() index!: number
  @Input() liked: boolean = false
  // date = DateTime.now().toISODate()

  constructor(private musicService:MusicService, private spotifyService:SpotifyService, private store:AngularFirestore) { }

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

  getAlbumInfoFromSpotify() {
    this.spotifyService.getAlbumInfo(this.song.album).subscribe((albumInfo:any) => {
      albumInfo['albums']['items'].forEach((album:any) => {
        album['artists'].forEach((artist:any) => {
          if (artist['name'] === this.song.artist) {   
            this.song.album_images = album['images'];
            let str = JSON.stringify(this.song)
            this.store.collection('songs').doc(this.song.id.toString()).set(JSON.parse(str))      
          }
        })
      })
    })
  }
}
