import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-songstable',
  templateUrl: './songstable.component.html',
  styleUrls: ['./songstable.component.scss']
})
export class SongstableComponent implements OnInit {
  @Input() songs!: Song[]

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
  }

  playSong(song: Song) {
    this.playerService.addSongs(this.songs)
    this.playerService.load(song)
    this.playerService.play()
  }

}
