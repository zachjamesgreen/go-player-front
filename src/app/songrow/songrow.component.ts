import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-songrow',
  templateUrl: './songrow.component.html',
  styleUrls: ['./songrow.component.scss']
})
export class SongrowComponent implements OnInit {
  @Input() song!: Song

  constructor() { }

  ngOnInit(): void {
  }

}
