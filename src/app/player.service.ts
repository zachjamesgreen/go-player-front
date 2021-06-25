import { EventEmitter, Injectable, Output } from '@angular/core';
import { Song } from './interfaces/song';
import { DateTime, Duration }from "luxon";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private audioObj = new Audio()
  private songs!: Song[]
  private song!: Song
  private baseUrl = "http://zachgreen.codes:8081/song"
  formatedDuration!: string
  currentTime!: string
  audioEvents = [
    'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
  ];
  @Output() playing: EventEmitter<any> = new EventEmitter()
  @Output() time: EventEmitter<any> = new EventEmitter()
  @Output() duration: EventEmitter<any> = new EventEmitter()
  isPlaying: boolean = false

  constructor() {
    this.audioObj.volume = 0.5
  }

  private addEvents(obj: any, events: Array<any>, handler: Function) {
    events.forEach(event => obj.addEventListener(event, handler));
  }

  private removeEvents(obj: any, events: Array<any>, handler: Function) {
    events.forEach(event => obj.removeEventListener(event, handler));
  }

  load(song: Song) {
    this.song = song
    this.audioObj.src = `${this.baseUrl}/${song.path}`
    this.audioObj.load()
  }

  play() {
    let playPromise = this.audioObj.play()
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.addEvents(this.audioObj, this.audioEvents, this.eventHandler);
        // this.formatedDuration = this.formatTime(this.audioObj.duration)
        this.song.duration = this.audioObj.duration
        this.playing.emit(this.song)
        this.isPlaying = true
      }).catch((error => console.log(error)))

    }
  }

  pause() {
    this.audioObj.pause()
    this.isPlaying = false
  }

  next() {
    let idx = this.songs.indexOf(this.song)
    let n = this.songs[idx+1]
    if (n) {
      this.load(n);
      this.play()
    } else {
      this.removeEvents(this.audioObj, this.audioEvents, this.eventHandler)
      return
    }
  }

  prev() {
    let idx = this.songs.indexOf(this.song)
    let n = this.songs[idx-1]
    if (n) {
      this.load(n);
      this.play()
    } else {
      this.load(this.songs[0]);
      this.play()
      return
    }
  }

  addSongs(songs: Song[]) {
    this.songs = songs
  }

  setVolume(vol: number) {
    this.audioObj.volume = vol
  }

  songTitle() {
    this.song.title
  }

  rawDuration(): number {
    return this.audioObj.duration
  }

  formatTime(time: number): string {
    return Duration.fromObject({seconds: time}).toFormat("m:ss")
  }

  setCurrentTime(time: number) {
    this.audioObj.currentTime = time
  }

  eventHandler = (event: any) => {
    switch (event.type) {
      case 'canplay':
        console.log('canplay')
        break;
      case 'playing':
        console.log('playing')
        break;
      case 'pause':
        console.log('pause')
        break;
      case 'timeupdate':
        // console.log('timeupdate')
        this.time.emit(this.audioObj.currentTime)
        break;
      case 'error':
        console.log('error')
        this.removeEvents(this.audioObj, this.audioEvents, this.eventHandler)
        break;
      case 'ended':
        console.log('ended')
        this.next()
        break;
    }
  }
}
