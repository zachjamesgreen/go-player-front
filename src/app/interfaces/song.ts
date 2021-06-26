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
  }

  fixfilepath(filepath: string) {
    return filepath.replace("files/", "")
  }
}