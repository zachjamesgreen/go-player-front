import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Song } from '../interfaces/song';
import { MusicService } from '../music.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-songstable',
  templateUrl: './songstable.component.html',
  styleUrls: ['./songstable.component.scss']
})
export class SongstableComponent implements OnInit {
  @Input() songs!: Song[]
  @Input() liked!: boolean
  @ViewChild('contextMenu') contextMenu!: ElementRef<any>
  @ViewChild('contextMenuWrapper') contextMenuWrapper!: ElementRef<any>
  song: any


  constructor(private playerService:PlayerService, private musicService:MusicService) { }

  ngOnInit(): void {
  }

  playSong(song: Song) {
    this.playerService.addSongs(this.songs)
    this.playerService.load(song)
    this.playerService.play()
  }

  rightClick(e: any, song: Song) {
    e.preventDefault()
    this.song = song
    this.contextMenuWrapper.nativeElement.style.display = 'block'
    this.contextMenu.nativeElement.style.left = e.clientX + 'px'
    this.contextMenu.nativeElement.style.top = e.clientY + 'px'
  }

  closeContextMenu() {
    this.contextMenuWrapper.nativeElement.style.display = 'none'
  }

  deleteSong(){
    this.musicService.deleteSong(this.song.id).subscribe((res) => {
      console.log(res)
      this.closeContextMenu()
    },
    (err) => {
      alert(err)
    },
    () => {
      let s = this.songs.indexOf(this.song)
      this.songs.splice(s, 1)
      this.closeContextMenu()
    })
  }

}
