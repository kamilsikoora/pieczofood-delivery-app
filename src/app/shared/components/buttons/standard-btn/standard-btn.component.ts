import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SvgIconColor } from '../../svg-icon/enums/svg-icon-color.enum';
import { SvgIconName } from '../../svg-icon/enums/svg-icon-name.enum';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'app-standard-btn',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './standard-btn.component.html',
  styleUrls: ['./standard-btn.component.scss'],
})
export class StandardBtnComponent {
  iconColor = SvgIconColor.OnCard;

  @Input() text!: string;
  @Input() mainIcon?: SvgIconName;
  @Input() actionIcon?: SvgIconName;
}
