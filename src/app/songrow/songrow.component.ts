import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { DateTime, Duration }from "luxon";

@Component({
  selector: 'app-songrow',
  templateUrl: './songrow.component.html',
  styleUrls: ['./songrow.component.scss']
})
export class SongrowComponent implements OnInit {
  @Input() song!: Song
  @Input() index!: number
  date = DateTime.now().toISODate()

  constructor() { }

  ngOnInit(): void {
  }

  formatTime(time: number): string {
    return Duration.fromObject({seconds: time}).toFormat("m:ss")
  }

}
