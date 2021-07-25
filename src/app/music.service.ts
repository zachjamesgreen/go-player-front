import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  path = "https://api.zachgreen.codes"
  constructor(private http:HttpClient) { }

  getArtist(id: number): Observable<Object> {
    return this.http.get(`${this.path}/artists/${id}`)
  }
  
  getArtists(): Observable<Object> {
    return this.http.get(`${this.path}/artists`)
  }

  getSongs(): Observable<Object> {
    return this.http.get(`${this.path}/songs`)
  }

  getArtistSongs(id: number): Observable<Object> {
    return this.http.get(`${this.path}/artists/${id}/songs`)
  }

  getArtistAlbums(id: number): Observable<Object> {
    return this.http.get(`${this.path}/artists/${id}/albums`)
  }

  getAlbums(): Observable<Object> {
    return this.http.get(`${this.path}/albums`)
  }

  getAlbum(id: number): Observable<Object> {
    return this.http.get(`${this.path}/albums/${id}`)
  }

  getAlbumSongs(id: number): Observable<Object> {
    return this.http.get(`${this.path}/albums/${id}/songs`)
  }

  getLikedSongs(): Observable<Object> {
    return this.http.get(`${this.path}/songs/liked`)
  }

  like(id: number) {
    return this.http.get(`${this.path}/songs/liked/${id}`)
  }

  unlike(id: number) {
    return this.http.get(`${this.path}/songs/liked/${id}/remove`)
  }
}
