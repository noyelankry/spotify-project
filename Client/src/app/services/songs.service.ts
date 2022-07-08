import { Injectable } from '@angular/core';
import { SONGS_MOCK } from 'src/mock-data/SONGS_MOCK';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor() { }

  getSongs() {
    return SONGS_MOCK
    // with a real DB we have to replace SONGS_MOCK with the results of the search!
  }
}
