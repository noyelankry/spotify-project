import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SONGS_MOCK } from 'src/mock-data/SONGS_MOCK';
import { Song } from 'src/types/interfaces/models/song';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  resultsQty = new EventEmitter<number>();
  songsRes: Song[] = SONGS_MOCK

  constructor() { }

  getSongs(): Observable<Song[]> {
    this.resultsQty.emit(this.songsRes.length);
    return of(this.songsRes)
  }

  getResultQty() {
    return this.resultsQty
  }
}
