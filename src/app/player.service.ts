import { Injectable } from '@angular/core';
import { Song } from './interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private audioObj = new Audio()
  private songs!: Song[]
  private song!: Song
  private baseUrl = "http://zachgreen.codes:8081/song"
  isPlaying: boolean = false

  constructor() {
    this.audioObj.volume = 0.5
  }

  load(song: Song) {
    this.song = song
    this.audioObj.src = `${this.baseUrl}/${song.path}`
    this.audioObj.load() 
  }

  play() {
    this.audioObj.play()
    this.isPlaying = true
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
      return
    }
  }

  addSongs(songs: Song[]) {
    this.songs = songs
  }

  setVolume(vol: number) {
    this.audioObj.volume = vol
  }
}
