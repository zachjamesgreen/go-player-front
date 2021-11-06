import { DateTime, Duration }from "luxon";
import { IImages } from "./spotify_image"
import { Artist } from "./artist"
import { Album } from "./album"

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
  artist: Artist;
  album: Album;
  duration: number = 0
  created_at: DateTime
  liked_date: DateTime
  url = "https://api.zachgreen.codes/song"
  album_images: Array<IImages> = []

  constructor(song: any) {
    // console.log(song)
    this.id = song.ID
    this.title = song.Title
    this.track = song.Track
    this.artist_id = song.ArtistId
    this.album_id = song.AlbumId
    this.path = this.fixfilepath(song.Path)
    this.year = song.Year
    // this.genre = song.genre.name
    this.artist = new Artist(song.Artist)
    this.album = new Album(song.Album)
    this.liked = song.Liked
    this.created_at = DateTime.fromISO(<any>song.CreatedAt)
    this.liked_date = DateTime.fromISO(<any>song.LikedDate)
    this.getDuration()
  }

  fixfilepath(filepath: string) {
    return filepath.replace("files/", "")
  }

  getDuration() {
    let audio = new Audio()
    audio.src = this.url + "/" + this.path
    audio.onloadedmetadata = () => {
      this.duration = audio.duration
      audio.src = ''
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