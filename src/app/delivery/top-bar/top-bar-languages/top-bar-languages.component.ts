import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconName } from 'src/app/shared/components/svg-icon/enums/svg-icon-name.enum';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RoundBtnComponent } from 'src/app/shared/components/buttons/round-btn/round-btn.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

type TopBarLanguagesItem = { name: string; icon: SvgIconName };

@Component({
  selector: 'app-top-bar-languages',
  standalone: true,
  imports: [CommonModule, RoundBtnComponent, ModalComponent],
  templateUrl: './top-bar-languages.component.html',
  styleUrls: ['./top-bar-languages.component.scss'],
})
export class TopBarLanguagesComponent implements OnInit {
  MODAL_TITLE = 'Choose languages';

  selectedLanguage!: TopBarLanguagesItem;
  languages: TopBarLanguagesItem[] = [
    { name: 'English', icon: SvgIconName.FlagUSA },
    { name: 'Polski', icon: SvgIconName.FlagPoland },
  ];

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.selectedLanguage = this.languages[0];
  }

  onLanguageBtn() {
    this.modalService.open(this.MODAL_TITLE);
  }
}
