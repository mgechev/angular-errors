import { Component, OnInit } from '@angular/core';

const getComponentMetadata = (selector: string) => ({
  selector,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
});

@Component(getComponentMetadata('app-home'))
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
