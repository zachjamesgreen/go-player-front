import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../interfaces/album';
// import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-albumcard',
  templateUrl: './albumcard.component.html',
  styleUrls: ['./albumcard.component.scss']
})
export class AlbumcardComponent implements OnInit {
  @Input('album') album!: Album
  image = ''

  constructor() { }

  ngOnInit(): void {
    if (this.album.images.length > 0) {
      this.image = this.album.images[0].url
    } else {
      this.image = `https://via.placeholder.com/300?text=${this.album.title}`
    }
  }
}


