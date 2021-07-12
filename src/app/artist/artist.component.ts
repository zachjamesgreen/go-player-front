import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';
import { Song } from '../interfaces/song';
import { Album } from '../interfaces/album';
import { Artist } from '../interfaces/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist_id
  artist!: Artist
  songs: Song[] = new Array
  albums: Album[] = new Array

  constructor(private musicService:MusicService,private actRoute: ActivatedRoute) {
    this.artist_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getArtist()
    // this.getSongs()
    this.getAlbums()
    
  }

  getArtist() {
    this.musicService.getArtist(this.artist_id)
      .subscribe((artist: any) => {
        this.artist = new Artist(artist)
      })
  }

  getSongs() {
    this.musicService.getArtistSongs(this.artist_id)
    .subscribe((songs: any) => {
      songs.map((song: Song) => {
        this.songs.push(new Song(song))
      })
    })
  }

  getAlbums() {
    this.musicService.getArtistAlbums(this.artist_id)
    .subscribe((albums: any) => {
      albums.map((album: Album) => {
        console.log(album);
        
        this.albums.push(new Album(album))
      })
    })
  }

}
