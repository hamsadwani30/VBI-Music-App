import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumLists : [] = [];
  searchSongText = "";
  p : number ;

  constructor(private songService: SongsService) { }

  ngOnInit() {
    this.songService.getAlbums().subscribe((albums) =>{
      this.albumLists = albums;
    },(err)=>{
      console.log(err);
    });
    
  }

  openAlbum(album){

  }

}
