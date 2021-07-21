import { DateTime, Duration }from "luxon";
import { IImages } from "./spotify_image"

export class Song {
  
  id: number;
  title: string;
  track: number;
  artist_id: string;
  album_id: string;
  path: string;
  year: number;
  plays: number = 0;
  liked: boolean;
  // genre: string;
  artist: string;
  album: string;
  duration!: number
  created_at: DateTime
  liked_date: DateTime
  url = "http://zachgreen.codes:8081/song"
  audio = new Audio()
  album_images: Array<IImages> = []

  constructor(song: Song) {
    this.id = song.id
    this.title = song.title
    this.track = song.track
    this.artist_id = song.artist_id
    this.album_id = song.album_id
    this.path = this.fixfilepath(song.path)
    this.year = song.year
    // this.genre = song.genre.name
    this.artist = song.artist
    this.album = song.album
    this.liked = song.liked
    this.created_at = DateTime.fromISO(<any>song.created_at)
    this.liked_date = DateTime.fromISO(<any>song.liked_date)
    this.getDuration()
  }

  fixfilepath(filepath: string) {
    return filepath.replace("files/", "")
  }

  getDuration() {
    this.audio.src = this.url + "/" + this.path
    let url = "http://zachgreen.codes:8081/song"
    this.audio.onloadedmetadata = () => {
      this.duration = this.audio.duration
      this.audio.src = ''
    }
  }

  // dateToString() {
  //   if (this.created_at < DateTime.now().plus({months: 1})) {
  //     let diff = DateTime.now().diff(this.created_at, ['days', 'seconds', 'hours', 'minutes'])    
  //     switch (diff.days) {
  //       case 0:       
  //         return this.lessThanDay(diff)
  //       case 1:
  //         return `${diff.days} day ago`
  //       default:
  //         return `${diff.days} days ago`
  //     }
  //   } else {
  //     return this.created_at.toLocaleString(DateTime.DATE_MED)
  //   }
  // }

  // lessThanDay(diff: Duration) {
  //   if (60 < diff.seconds && diff.seconds <  3600) {
  //     return `${diff.minutes} minutes ago`
  //   } else {
  //     if (diff.hours == 1) {
  //       return `${diff.hours} hour ago`
  //     } else {
  //       return `${diff.hours} hours ago`
  //     }
  //   }
  // }

}