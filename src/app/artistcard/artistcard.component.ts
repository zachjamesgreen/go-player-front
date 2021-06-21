import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../interfaces/artist';

@Component({
  selector: 'app-artistcard',
  templateUrl: './artistcard.component.html',
  styleUrls: ['./artistcard.component.scss']
})
export class ArtistcardComponent implements OnInit {
  @Input() artist!: Artist

  constructor() { }

  ngOnInit(): void {
  }

}
