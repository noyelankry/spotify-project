import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/types/interfaces/models/song';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'spot-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {


  constructor(public _songsService: SongsService) { }

  onSongSearch(term: string) {
    this._songsService.searchSpotify(term)
  }

  ngOnInit(): void {
  }

}
