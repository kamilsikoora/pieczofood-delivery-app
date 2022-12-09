import { Component, Input } from '@angular/core';
import { SvgIconColor } from '../svg-icon/enums/svg-icon-color.enum';
import { SvgIconName } from '../svg-icon/enums/svg-icon-name.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  iconColor = SvgIconColor.OnCard;

  @Input() text!: string;
  @Input() mainIcon?: SvgIconName;
  @Input() actionIcon?: SvgIconName;
}
