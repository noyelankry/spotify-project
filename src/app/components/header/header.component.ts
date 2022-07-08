import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'MY SPOTIFY SEARCH.'
  constructor() { }

  ngOnInit(): void {
  }

}
