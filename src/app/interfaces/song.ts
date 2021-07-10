import { DateTime, Duration }from "luxon";

export class Song {
  
  id: number;
  title: string;
  track: number;
  artist_id: string;
  album_id: string;
  path: string;
  year: number;
  // genre: string;
  artist: string;
  album: string;
  duration!: number
  created_at: DateTime
  updated_at: DateTime
  url = "http://zachgreen.codes:8081/song"
  audio = new Audio()

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
    this.created_at = song.created_at
    this.updated_at = song.updated_at
    this.getDuration()
  }

  fixfilepath(filepath: string) {
    return filepath.replace("files/", "")
  }

  getDuration() {
    this.audio.src = this.url + "/" + this.path
    let url = "http://zachgreen.codes:8081/song"
    this.audio.onloadedmetadata = () => {
      // this.duration = Duration.fromObject({seconds: this.audio.duration}).toFormat("m:ss")
      this.duration = this.audio.duration
      this.audio.src = ''
    }
  }

}