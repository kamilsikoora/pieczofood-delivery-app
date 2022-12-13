import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconName } from '../../svg-icon/enums/svg-icon-name.enum';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'app-round-btn',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './round-btn.component.html',
  styleUrls: ['./round-btn.component.scss'],
})
export class RoundBtnComponent {
  @Input() icon?: SvgIconName;
  @Input() iconSize? = '2em';
  @Input() text?: string;
}
