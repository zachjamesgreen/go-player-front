import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../interfaces/album';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  album_id
  albums: Album[] = new Array

  constructor(private musicService:MusicService,private actRoute: ActivatedRoute) {
    this.album_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this.musicService.getAlbums()
    .subscribe((albums: any) => {
      albums.map((album: Album) => {      
        this.albums.push(new Album(album))       
      })
    })
  }

}
