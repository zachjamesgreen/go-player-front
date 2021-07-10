export class Artist {

  id: number
  name: string
  images!: any
  
  constructor(artist: Artist) {
    this.id = artist.id
    this.name = artist.name
  }
}