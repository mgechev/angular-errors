import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, RouterEvent } from '@angular/router';
import { AppManager } from './app-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;

  constructor(router: Router, manager: AppManager) {
    manager.setTitle('Home');
    this.loading = false;

    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.loading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loading = false;
        }
      }
    );
  }
}
