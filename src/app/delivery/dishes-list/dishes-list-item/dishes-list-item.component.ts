import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'src/app/shared/components/svg-icon/svg-icon.component';
import { SvgIconName } from 'src/app/shared/components/svg-icon/enums/svg-icon-name.enum';
import { SvgIconColor } from 'src/app/shared/components/svg-icon/enums/svg-icon-color.enum';

@Component({
  selector: 'app-dishes-list-item',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss'],
})
export class DishesListItemComponent implements OnInit {
  ingredientsText!: string;
  currency = '$';

  actionIcon = { name: SvgIconName.ArrowBack, color: '#ccc' };
  photoIcon = {
    name: SvgIconName.Photo,
    color: '#ccc',
    size: '2em',
  };

  @Input() name!: string;
  @Input() ingredients!: string[];
  @Input() price!: string;
  @Input() image?: string;

  ngOnInit() {
    this.ingredientsText = this.ingredients.join(', ');
    console.log(this.ingredientsText);
  }
}
