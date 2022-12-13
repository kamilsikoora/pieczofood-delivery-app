import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TopBarComponent],
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {}
