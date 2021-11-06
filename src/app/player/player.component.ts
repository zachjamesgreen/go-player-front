import { Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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
  isPlaying: boolean = this.playerService.isPlaying
  @ViewChild('playerSlider') input!: ElementRef<HTMLInputElement>
  @ViewChild('vol') vol!: ElementRef<HTMLInputElement>

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    
    this.playerSub = this.playerService.playing.subscribe(song => this.setInfo(song));
    this.playerService.time.subscribe(time => {
      this.fcurrentTime = this.playerService.formatTime(time)
      this.currentTime = time
      let value = this.input.nativeElement.value
      let max = this.input.nativeElement.max
      this.setSliderCSS(this.input.nativeElement)
    })
    
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    event.preventDefault()
    if (event.key === " ") {
      if (this.playerService.isPlaying) {
        this.playerService.pause()
        this.isPlaying = false
      } else {
        this.playerService.play()
        this.isPlaying = true
      }
      
    }
    
  }

  ngAfterViewInit() {
    this.input.nativeElement.style.background = `linear-gradient(to right, #04BFAD 0%, #04BFAD 0%, #fff 100%, #fff 100%)`
    this.vol.nativeElement.style.background = `linear-gradient(to right, #04BFAD 0%, #04BFAD 50%, #fff 50%, #fff 100%)`
  }


  playPause() {
    if (!this.playerService.isPlaying) {
      this.playerService.play()
      this.isPlaying = true
    } else {
      this.playerService.pause()
      this.isPlaying = false
    }
  }

  // play() {
  //   if (!this.playerService.isPlaying) {
  //     this.playerService.play()
  //     this.isPlaying = true
  //   }
  // }
  // pause() {
  //   if (this.playerService.isPlaying) {
  //     this.playerService.pause()
  //     this.isPlaying = false
  //   }
  // }
  prev() {
    this.playerService.prev()
  }
  next() {
    this.playerService.next()
  }

  volumeChange(event: any) {
    this.playerService.setVolume(event.target.value)
    this.setSliderCSS(event.target)
  }

  setInfo(song: Song) {
    this.song = song
    this.songTitle = song.title
    this.artist = song.artist.name
    this.fDuration = this.playerService.formatTime(song.duration)
    this.isPlaying = true
    
  }

  formatedDuration() {
    this.playerService.formatedDuration
  }

  onSliderChangeEnd(event: any) {
    this.playerService.setCurrentTime(event.target.value)
    this.setSliderCSS(event.target)

  }

  // ElementRef<HTMLInputElement>
  setSliderCSS(input:any) {
    let value = parseFloat(input.value)
    let max = parseInt(input.max)
    let style = `linear-gradient(to right, #04BFAD 0%, #04BFAD ${(value/max)*100}%, #fff ${(value/max)*100}%, #fff 100%)`
    input.style.background = style
  }



}
