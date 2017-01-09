import { Component } from '@angular/core';
import { DispatcherService } from '../_common/dispatcher/dispatcher.service';
import { MAIN_MENU_TOGGLE } from './layout.interface';

@Component( {
  selector: 'header',
  template: `
    <button class="navbar-toggler hidden-md-up" type="button" (click)="toggleMainMenu()">☰</button>
    <a class="navbar-brand" [routerLink]="['.']">
      <i class="logo"></i>
      {{'APP_NAME' | translate}}
    </a>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav hidden-sm-down float-left">
        <li class="nav-item">
          <button class="nav-link navbar-toggler layout-toggler" type="button" (click)="toggleMainMenu()">☰</button>
        </li>
      </ul>
      <form class="form-inline float-left hidden-sm-down">
         <input class="form-control" type="text" placeholder="Search..."/>
      </form>
      <ul class="nav float-right hidden-sm-down">
        <li class="nav-item"><button class="app-icon-search"></button></li>
        <li class="nav-item"><button class="app-icon-notification"></button></li>
        <li class="nav-item"><button class="app-icon-mail"></button></li>
      </ul>
    </div>
  `,
  host: {
    'class': 'navbar navbar-sticky-top navbar-inverse navbar-toggleable'
  }
})
export class HeaderComponent {

  toggleMainMenu() {
    DispatcherService.dispatch(MAIN_MENU_TOGGLE);
  }
}
