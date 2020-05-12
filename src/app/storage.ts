import { Injectable } from '@angular/core';
import { AppManager } from './app-manager';

@Injectable({ providedIn: 'root' })
export class Storage {
  constructor(private manager: AppManager) {}

  save(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
