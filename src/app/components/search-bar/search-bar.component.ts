import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spot-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = ""
  @Output() search = new EventEmitter()

  onSearch() {
    this.search.emit(this.searchTerm)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
