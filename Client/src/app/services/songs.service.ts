import { EventEmitter, Injectable } from '@angular/core';
import { Song } from 'src/types/interfaces/models/song';
import { idText } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  resultsQty = new EventEmitter<number>()
  songsRes = new EventEmitter<Song[]>()

  clientId: string = '1866bcd156c04721bd5d669b75a0d5f7'
  clientSecret: string = '3418b612e667483096772b57fb704ddb'

  constructor() { }

  getSongs() {
    return this.songsRes
  }

  getResultQty() {
    return this.resultsQty
  }

  async searchSpotify(searchTerm: string): Promise<any> {
    let songs = []

    if (searchTerm) {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
        },
        body: 'grant_type=client_credentials'
      })

      const { access_token } = await response.json()
      const token = access_token

      const response_1 = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
      })

      const { albums } = await response_1.json()

      songs = albums.items.map((item: any) => {
        const artist = item.artists[0].name
        const songName = item.name
        return { artist, songName }
      })
    }
    this.songsRes.emit(songs)
    this.resultsQty.emit(songs.length)
    this.getSongs()
  }
}
