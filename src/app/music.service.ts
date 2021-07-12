import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  path = "http://zachgreen.codes:8081"
  constructor(private http:HttpClient) {
    
  }

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

  updateSongLike(id: number, like: boolean) {
    return this.http.post(`${this.path}/songs/${id}/like`, like)
  }
}
