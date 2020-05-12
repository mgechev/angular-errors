import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Storage } from './storage';

@Injectable({ providedIn: 'root' })
export class AppManager {
  constructor(private title: Title, private storage: Storage) {}

  setTitle(title: string) {
    this.title.setTitle(title);
    this.storage.save('title', title);
  }
}
