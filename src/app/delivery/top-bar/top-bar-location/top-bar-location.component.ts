import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconName } from 'src/app/shared/components/svg-icon/enums/svg-icon-name.enum';
import { SvgIconColor } from 'src/app/shared/components/svg-icon/enums/svg-icon-color.enum';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { StandardBtnComponent } from 'src/app/shared/components/buttons/standard-btn/standard-btn.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-top-bar-location',
  standalone: true,
  imports: [CommonModule, StandardBtnComponent, ModalComponent],
  templateUrl: './top-bar-location.component.html',
  styleUrls: ['./top-bar-location.component.scss'],
})
export class TopBarLocationComponent implements OnInit {
  MODAL_TITLE = 'Select restaurant location';

  locationIcon = {
    name: SvgIconName.Location,
    color: SvgIconColor.OnCard,
  };
  moreIcon = {
    name: SvgIconName.ArrowMore,
    color: SvgIconColor.OnCard,
  };

  selectedLocation!: string;
  locations = [
    'Wełniany rynek 4, 66-400 Gorzów Wlkp.',
    'Wyszynskiego 155, 66-400 Gorzów Wlkp.',
    'Polwiejska 241, 60-001 Poznan.',
  ];

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.selectedLocation = this.locations[0];
  }

  onLocationBtn() {
    this.modalService.open(this.MODAL_TITLE);
  }
}
