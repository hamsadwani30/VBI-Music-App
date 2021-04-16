import { Component, OnInit, Output, TemplateRef } from '@angular/core';
// import  arrayShuffle from 'array-shuffle';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  songsList : any = [];
  enablePlaylistCreation:boolean = false;
  searchSongText : string = "";  
  playlistname : string = "";
  playlist  = [];
  submitted :boolean = false;
  viewPlayer : boolean = false;
  modalRef: BsModalRef;
 selectedSong;
 play: boolean = false;
  constructor(private songsService: SongsService,private modalService: BsModalService) {
    
   }

  ngOnInit() {
   this.getSongsList();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

 getSongsList(){
    this.songsService.getSongs().subscribe((data)=>{
      this.songsList = data;
      console.log(this.songsList);
    });
  }

  onPlay(song){
    this.viewPlayer = true;
    this.selectedSong = song;
    this.play = true;
  }

  enableAddingSongs(){
    this.enablePlaylistCreation = !this.enablePlaylistCreation;
  }

  addSong(event,song){
    if(event.target.checked){
      this.playlist.push(song);
    }else{
      this.playlist.forEach((value,index)=>{
        if(value.id==song.id) {
          console.log(index);
          this.playlist.splice(index,1);
        }
    });
    }
    
  }

  savePlaylist(){
    this.submitted = true;
    console.log("Playlist :"+ JSON.stringify(this.playlist));
    if(this.playlistname != null || this.playlistname != undefined || this.playlistname != ""){
      localStorage.setItem(this.playlistname,JSON.stringify(this.playlist));
      this.enablePlaylistCreation = false;
     this.modalRef.hide();
    }
  }

  shufflePlaylist(){
    console.log("shuffle")
    this.songsList = this.songsList.sort(() => Math.random() - 0.5);
  }

}
