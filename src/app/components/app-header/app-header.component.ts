import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app-settings'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass']
})
export class AppHeaderComponent implements OnInit {
  title: string;

  copyright: string;

  constructor() { }

  ngOnInit(): void {
    this.title = AppSettings.APP_TITLE;
    this.copyright = AppSettings.APP_COPYRIGHT;
  }
}
