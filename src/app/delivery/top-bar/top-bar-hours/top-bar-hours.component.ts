import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconName } from 'src/app/shared/components/svg-icon/enums/svg-icon-name.enum';
import { SvgIconColor } from 'src/app/shared/components/svg-icon/enums/svg-icon-color.enum';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { StandardBtnComponent } from 'src/app/shared/components/buttons/standard-btn/standard-btn.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-top-bar-hours',
  standalone: true,
  imports: [CommonModule, StandardBtnComponent, ModalComponent],
  templateUrl: './top-bar-hours.component.html',
  styleUrls: ['./top-bar-hours.component.scss'],
})
export class TopBarHoursComponent implements OnInit {
  MODAL_TITLE = 'Delivery time';

  timeIcon = {
    name: SvgIconName.Time,
    color: SvgIconColor.OnCard,
  };
  moreIcon = {
    name: SvgIconName.ArrowMore,
    color: SvgIconColor.OnCard,
  };

  selectedHour!: string;
  hours = [
    'PN: 12:00 - 20:00',
    'WT: 12:00 - 20:00',
    'SR: 12:00 - 20:00',
    'CZ: 12:00 - 20:00',
    'PT: 12:00 - 22:00',
    'SO: 12:00 - 22:00',
    'ND: close',
  ];

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.selectedHour = this.hours[0];
  }

  onHoursBtn() {
    this.modalService.open(this.MODAL_TITLE);
  }
}
