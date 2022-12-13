import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar-nav.component.html',
  styleUrls: ['./top-bar-nav.component.scss'],
})
export class TopBarNavComponent {
  activeItemId = 'popular';
  navItems = [
    { id: 'popular', text: 'Popular' },
    { id: 'pizza', text: 'Pizza' },
    { id: 'salads', text: 'Salads' },
    { id: 'pasta', text: 'Pasta' },
    { id: 'fastFood', text: 'Fast Food' },
    { id: 'sauces', text: 'Sauces' },
    { id: 'drinks', text: 'Drinks' },
  ];

  onItemClick(itemId: string) {
    this.activeItemId = itemId;
  }
}
