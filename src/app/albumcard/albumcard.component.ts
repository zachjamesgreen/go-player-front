import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-albumcard',
  templateUrl: './albumcard.component.html',
  styleUrls: ['./albumcard.component.scss']
})
export class AlbumcardComponent implements OnInit {
  @Input('album') album!: Album

  constructor() { }

  ngOnInit(): void {
  }

}
