import { Injectable } from '@angular/core';

@Injectable()
export class Storage {
  constructor() {}

  save(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
