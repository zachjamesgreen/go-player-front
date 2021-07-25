import { Injectable } from '@angular/core';
import { ENV } from './env';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DateTime } from 'luxon';
import { Artist } from

interface Token {
  access_token: string;
  expires_in: number;
  expires: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  private token: any;

  constructor(private http:HttpClient) {
    this.token = localStorage.getItem('spotify_token');
    this.checkToken();
  }

  checkToken() {
    if (this.token == null) {
      this.getToken();
    } else {
      let t = JSON.parse(this.token);
      let expires = DateTime.fromISO(t.expires);
      if (expires < DateTime.now()) {
        this.getToken();
      }
    }
  }
  
  getToken() {
    let str = 'Basic ' + btoa(ENV.spotify_client_id + ':' + ENV.spotify_client_secret)
    let headers = new HttpHeaders({'Authorization': str, 'Content-Type': 'application/x-www-form-urlencoded'});
    let params = new HttpParams().set('grant_type', 'client_credentials')
    this.http.post('https://accounts.spotify.com/api/token', params, {headers: headers}).subscribe(
      (res:any) => {
        res.expires = DateTime.now().plus({seconds: res.expires_in}).toJSON();
        this.token = JSON.stringify(res);
        localStorage.setItem('spotify_token', this.token);
    },
      (err) => {
        console.log(err);
      });
  }

  getArtistInfo(artist: Artist) {
    await this.checkToken();
    let t = JSON.parse(this.token);
    
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + t.access_token});
    return this.http.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`, {headers: headers});
  }

  getAlbumInfo(albumName:string) {
    this.checkToken();
    let t = JSON.parse(this.token);
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + t.access_token);
    let params = new HttpParams().set('q', albumName).set('type', 'album');
    return this.http.get("https://api.spotify.com/v1/search", {headers: headers, params: params});
  }
}
