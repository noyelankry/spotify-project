import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'spot-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getSongsFromAPI()
  }

  getSongsFromAPI() {
    this.appService.getSongs().subscribe()
  }

}
