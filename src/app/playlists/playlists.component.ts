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
  constructor(private router: Router,private songService: SongsService) { }

  ngOnInit() {
    this.playlists = this.songService.getPlaylists();
  }

  viewPlaylist(playlist){
    this.router.navigate(['/view-playlist'],{queryParams:{playlist:playlist}});
  
  }

}
