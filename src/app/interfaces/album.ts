import { Artist } from "./artist"

export class Album {

  id: number;
  title: string;
  // artist: Artist;
  artist_id: number

  constructor(album: Album) {
    this.id = album.id;
    this.title = album.title;
    this.artist_id = album.artist_id
  }
}