import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spot-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input() artist: string = ''
  @Input() songName: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
