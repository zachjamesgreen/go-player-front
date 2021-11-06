interface Image {
  url: string;
  height: number;
  width: number;
}

export class Artist {

  id: number
  name: string
  images!: Array<Image>
  spotify_id!: string
  
  constructor(artist: any) {
    this.id = artist.ID
    this.name = artist.Name
    this.spotify_id = artist.SpotifyId
    this.images = artist.Images
  }
}

