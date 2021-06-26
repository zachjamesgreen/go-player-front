import { Artist } from "./artist"

export class Album {

  id: number;
  title: string;
  // artist: Artist;
  artist_id: number
  artist: string
  image: boolean

  constructor(album: Album) {
    this.id = album.id;
    this.title = album.title;
    this.artist_id = album.artist_id
    this.image = album.image
    this.artist = album.artist
  }
}