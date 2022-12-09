import { Component, Input } from '@angular/core';

import { SvgIconColor } from '../../svg-icon/enums/svg-icon-color.enum';
import { SvgIconName } from '../../svg-icon/enums/svg-icon-name.enum';

@Component({
  selector: 'app-standard-btn',
  templateUrl: './standard-btn.component.html',
  styleUrls: ['./standard-btn.component.scss'],
})
export class StandardBtnComponent {
  iconColor = SvgIconColor.OnCard;

  @Input() text!: string;
  @Input() mainIcon?: SvgIconName;
  @Input() actionIcon?: SvgIconName;
}
