
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  @Input() song;
  @Input() autoplayed : boolean;
  track ;

  constructor() {
    // this.msaapPlaylist.push(this.song);
    console.log("2");
   }

  ngOnInit() {
    console.log("1");
    this.track = "./assets/sample.mp3";
  }
  

  ngOnChanges(){
    console.log(3);
    this.track = "";
    if(this.autoplayed == true)
    setTimeout(() => {
      this.ngOnInit();
    }, 1500);


  }


}
