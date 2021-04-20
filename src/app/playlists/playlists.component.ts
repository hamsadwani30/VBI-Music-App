import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists = [];
  songs = [];
  searchSongText = "";
  p : number ;

  constructor(private router: Router,private songService: SongsService) { }

  ngOnInit() {
    this.playlists = this.songService.getPlaylists();
  }

  trackByFn(index, item) {
    return index; // or item.id
    }

  viewPlaylist(playlist){
    this.router.navigate(['/view-playlist'],{queryParams:{playlist:playlist}});
  
  }

}
