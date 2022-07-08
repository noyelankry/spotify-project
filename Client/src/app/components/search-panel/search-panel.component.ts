import { Component, OnInit } from '@angular/core';
import { Song } from 'src/types/interfaces/models/song';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'spot-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  status: string = ''
  songsList: Song[] = []

  constructor(private _songsService: SongsService) { }

  onSongSearch(term: string) {
    this.status = "search clicked! term:" + term;
    this.songsList = this._songsService.getSongs();
  }
  ngOnInit(): void {
  }

}
