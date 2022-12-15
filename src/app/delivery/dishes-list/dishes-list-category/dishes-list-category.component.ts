import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dishes-list-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dishes-list-category.component.html',
  styleUrls: ['./dishes-list-category.component.scss'],
})
export class DishesListCategoryComponent {
  @Input() name!: string;
  @Input() description?: string;
  @Input() image?: string;
}
