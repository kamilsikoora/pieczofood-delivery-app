import { Component, Input } from '@angular/core';
import { SvgIconName } from '../../svg-icon/enums/svg-icon-name.enum';

@Component({
  selector: 'app-round-btn',
  templateUrl: './round-btn.component.html',
  styleUrls: ['./round-btn.component.scss'],
})
export class RoundBtnComponent {
  @Input() icon?: SvgIconName;
  @Input() iconSize? = '2em';
  @Input() text?: string;
}
