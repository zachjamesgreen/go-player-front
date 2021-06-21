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

  getArtists(): Observable<Object> {
    return this.http.get(`${this.path}/artists`)
  }

  getSongs(): Observable<Object> {
    return this.http.get(`${this.path}/songs`)
  }
}
