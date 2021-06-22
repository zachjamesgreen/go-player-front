import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
  }

  play() {
    if (!this.playerService.isPlaying) {
      this.playerService.play()
    }
  }
  pause() {
    if (this.playerService.isPlaying) {
      this.playerService.pause()
    }
  }
  prev() {
    this.playerService.prev()
  }
  next() {
    this.playerService.next()
  }
  volumeChange(event: any) {
    // console.log(event.target.value);
    this.playerService.setVolume(event.target.value)
  }



}
