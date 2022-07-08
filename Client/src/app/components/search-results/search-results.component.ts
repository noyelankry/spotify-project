import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/types/interfaces/models/song';

@Component({
  selector: 'spot-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() songs: Song[] = []

  constructor() { }

  ngOnInit(): void {
  }
}
