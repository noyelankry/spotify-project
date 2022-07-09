import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'spot-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private songService: SongsService) { }

  ngOnInit(): void {
  }

}
