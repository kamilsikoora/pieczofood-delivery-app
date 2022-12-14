import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarLogoComponent } from './top-bar-logo/top-bar-logo.component';
import { TopBarLocationsComponent } from './top-bar-locations/top-bar-locations.component';
import { TopBarLanguagesComponent } from './top-bar-languages/top-bar-languages.component';
import { TopBarHoursComponent } from './top-bar-hours/top-bar-hours.component';
import { TopBarNavComponent } from './top-bar-nav/top-bar-nav.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    TopBarLogoComponent,
    TopBarLocationsComponent,
    TopBarLanguagesComponent,
    TopBarHoursComponent,
    TopBarNavComponent,
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {}
