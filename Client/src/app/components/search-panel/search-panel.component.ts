import { Component, OnInit } from '@angular/core';
import { Song } from 'src/types/interfaces/models/song';
import { SongsService } from 'src/app/services/songs.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'spot-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  songsList: Song[] = []

  constructor(private _songsService: SongsService) { }

  onSongSearch(term: string) {
    this._songsService.getSongs().subscribe((searchResults: Song[]) => {
      this.songsList = searchResults
    })
  }

  ngOnInit(): void {
  }

}
