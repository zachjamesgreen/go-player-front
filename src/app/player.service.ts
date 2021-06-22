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
    this.audioObj.src = `${this.baseUrl}/${song.path}`
    this.audioObj.load()
    this.play()
    console.log(this.audioObj);
    
  }

  play() {
    this.audioObj.play()
    this.isPlaying = true
  }

  pause() {
    this.audioObj.pause()
    this.isPlaying = false
  }

  addSongs(songs: Song[]) {
    this.songs = songs
  }

  setVolume(vol: number) {
    this.audioObj.volume = vol
  }
}
