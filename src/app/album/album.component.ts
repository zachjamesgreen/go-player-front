import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../interfaces/album';
import { Song } from '../interfaces/song';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album_id
  album!: Album
  songs: Song[] = new Array

  constructor(private musicService:MusicService, private actroute: ActivatedRoute) {
    this.album_id = this.actroute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.musicService.getAlbumSongs(this.album_id)
      .subscribe((songs: any) => { 
        songs.map((song: Song) => {
          this.songs.push(new Song(song))
        })
      })

    this.musicService.getAlbum(this.album_id)
      .subscribe((album: any) => {
        this.album = new Album(album)
      })
  }

}
