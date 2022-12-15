import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesListCategoryComponent } from './dishes-list-category/dishes-list-category.component';
import { DishesListItemComponent } from './dishes-list-item/dishes-list-item.component';
import { DishCategoriesMock } from './mocks/dish-categories.mock';

@Component({
  selector: 'app-dishes-list',
  standalone: true,
  imports: [CommonModule, DishesListCategoryComponent, DishesListItemComponent],
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss'],
})
export class DishesListComponent {
  dishCategories = DishCategoriesMock;
}
