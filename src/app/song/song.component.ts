
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

  constructor() {}

  ngOnInit() {
  }


}
