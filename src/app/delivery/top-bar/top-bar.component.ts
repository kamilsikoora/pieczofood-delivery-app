import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarLogoComponent } from './top-bar-logo/top-bar-logo.component';
import { TopBarLocationComponent } from './top-bar-location/top-bar-location.component';
import { TopBarLanguagesComponent } from './top-bar-languages/top-bar-languages.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    TopBarLogoComponent,
    TopBarLocationComponent,
    TopBarLanguagesComponent,
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {}
