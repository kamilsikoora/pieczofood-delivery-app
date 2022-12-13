import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SvgIconColor } from 'src/app/shared/components/svg-icon/enums/svg-icon-color.enum';
import { SvgIconName } from 'src/app/shared/components/svg-icon/enums/svg-icon-name.enum';
import { SvgIconComponent } from 'src/app/shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-top-bar-logo',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './top-bar-logo.component.html',
  styleUrls: ['./top-bar-logo.component.scss'],
})
export class TopBarLogoComponent {
  BRAND_NAME = 'PieczoPizza';

  backIcon = {
    name: SvgIconName.ArrowBack,
    color: SvgIconColor.OnCard,
    size: '1em',
  };
  logoIcon = {
    name: SvgIconName.Logo,
    color: SvgIconColor.Base,
    size: '2em',
  };

  onClick() {
    console.log('click');
  }
}
