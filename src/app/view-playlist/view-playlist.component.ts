import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.scss']
})
export class ViewPlaylistComponent implements OnInit {

  key : string ;
  selectedSong = "";
  searchSongText = "";
  songsList = [];
  viewPlayer :boolean = false;
  play : boolean = false;
  p : number;

  constructor(private router: ActivatedRoute, private songsService : SongsService) { }

  ngOnInit() {
    this.router.queryParams
      .subscribe(params => {
        console.log(params); 
        this.key = params.playlist;
      }
    );

    this.getSongs(this.key);
  }

  trackByFn(index, item) {
    return index; // or item.id
    }

  getSongs(key){
    this.songsList = this.songsService.getAllSongsfromPlaylist(key);
    console.log(this.songsList);
  }

  onPlay(song){
    this.viewPlayer = true;
    this.selectedSong = song;
    this.play = true;
  }

  shufflePlaylist(){
    this.songsList = this.songsList.sort(() => Math.random() - 0.5);
  }
}
