import { Artist } from "./artist"
import { IImages } from "./spotify_image"

export class Album {

  id: number;
  title: string;
  // artist: Artist;
  artist_id: number
  artist: string
  // images: boolean
  images: Array<IImages> = []
  spotify_id!: string;
  spotify_link!: string;

  constructor(album: any) {
    this.id = album.ID;
    this.title = album.Title;
    this.artist_id = album.ArtistId;
    this.images = album.Images;
    this.artist = album.Artist.Name;
    this.spotify_id = album.SpotifyId;
    this.spotify_link = album.SpotifyLink;
  }
}