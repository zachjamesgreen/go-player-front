export class Artist {

  id: number
  name: string
  images!: any
  spotify_url!: string
  spotify_id!: string
  spotify_genres!: string[]
  
  constructor(artist: Artist) {
    this.id = artist.id
    this.name = artist.name
  }
}