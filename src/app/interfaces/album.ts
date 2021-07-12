import { Artist } from "./artist"
import { IImages } from "./spotify_image"

export class Album {

  id: number;
  title: string;
  // artist: Artist;
  artist_id: number
  artist: string
  image: boolean
  spotify_images: Array<IImages> = []

  constructor(album: Album) {
    this.id = album.id;
    this.title = album.title;
    this.artist_id = album.artist_id
    this.image = album.image
    this.artist = album.artist
  }
}