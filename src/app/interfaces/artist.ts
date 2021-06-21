export class Artist {

  id: number
  name: string
  
  constructor(artist: Artist) {
    this.id = artist.id
    this.name = artist.name
  }
}