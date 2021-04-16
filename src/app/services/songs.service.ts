import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getSongs() : Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }

  getAlbums(): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }

  getPlaylists(){
    let keys = Object.keys(localStorage);
    return keys;
  }

  getAllplaylists(){
    let values = [];
    let keys = Object.keys(localStorage);
    let i=keys.length;

    while(i--){
      values.push(localStorage.getItem(keys[i]))
    }

    return values;
  }

  getAllSongsfromPlaylist(key){
   return JSON.parse(localStorage.getItem(key));
  }
  
}
