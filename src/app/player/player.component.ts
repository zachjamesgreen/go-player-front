import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Song } from '../interfaces/song';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  song!: Song
  songTitle!: string
  artist!: string
  private playerSub!: Subscription
  fcurrentTime: string = '0:00'
  fDuration: string = '0:00'
  currentTime: number = 0


  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerSub = this.playerService.playing.subscribe(song => this.setInfo(song));
    this.playerService.time.subscribe(time => {
      this.fcurrentTime = this.playerService.formatTime(time)
      this.currentTime = time
    })
    
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    event.preventDefault()
    if (event.key === " ") {
      if (this.playerService.isPlaying) {
        this.playerService.pause()
      } else {
        this.playerService.play()
      }
      
    }
    
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

  setInfo(song: Song) {
    this.song = song
    this.songTitle = song.title
    this.artist = song.artist
    this.fDuration = this.playerService.formatTime(song.duration)
    
  }

  formatedDuration() {
    this.playerService.formatedDuration
  }

  onSliderChangeEnd(event: any) {
    this.playerService.setCurrentTime(event.target.value)
    
  }



}
