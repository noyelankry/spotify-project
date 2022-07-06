import { Component, OnInit } from '@angular/core';
import { Song } from 'src/types/interfaces/models/song';
import { SONGS_MOCK } from 'src/mock-data/SONGS_MOCK';

@Component({
  selector: 'spot-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  status: string = ''
  songsList: Song[] = []

  onSongSearch(term: string) {
    this.status = "search clicked! term:" + term;
    this.songsList = SONGS_MOCK;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
