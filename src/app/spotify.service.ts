import { Injectable } from '@angular/core';
import { ENV } from './env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getToken() {
    // let headers = new HttpHeaders({Authorization: 'Basic ' + btoa('ENV.spotify_client_id:ENV.spotify_client_secret')});
    // this.http.post('https://accounts.spotify.com/api/token', {grant_type: 'client_credentials'}, {headers: headers})
    console.log(ENV.spotify_client_id);  
  }

  getArtistInfo(artistName:string) {
    let headers = new HttpHeaders({Authorization: 'Bearer ' + ENV.token});
    return this.http.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`, {headers: headers});
  }
}
