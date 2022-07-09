import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';
import { Song } from 'src/types/interfaces/models/song';

@Component({
  selector: 'spot-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  resultsCounter: number = 0

  constructor(private _songsService: SongsService) { }

  ngOnInit(): void {
    this._songsService.getResultQty().subscribe(
      res => this.resultsCounter = res
    )
  }

}
