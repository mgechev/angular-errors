import { Component } from '@angular/core';
import { Base } from './base';

@Component({
  selector: 'app-nyan',
  template: '<img src="/assets/nyan.png">',
  styleUrls: ['./nyan.component.css']
})
export class NyanComponent extends Base {}
