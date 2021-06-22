import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Song } from '../interfaces/song';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  songTitle!: String
  private playerSub!: Subscription

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerSub = this.playerService.playing.subscribe(something => this.setTitle(something));
    
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
    this.playerService.setVolume(event.target.value)
  }

  setTitle(song: Song) {
    this.songTitle = song.title
    
  }



}
