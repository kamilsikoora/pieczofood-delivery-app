import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { SvgIconName } from './enums/svg-icon-name.enum';
import { environment } from '../../../../environments/environment';
import { SvgIconColor } from './enums/svg-icon-color.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [innerHTML]="iconHtml" [ngClass]="class" [ngStyle]="style"></span>
  `,
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  iconHtml?: SafeHtml;
  class = '';
  style = {};

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  @Input() name!: SvgIconName;
  @Input() color?: SvgIconColor | string;
  @Input() size?: string;

  ngOnInit(): void {
    const url = `${environment.iconsFolderPath}${this.name}.svg`;

    this.http.get(url, { responseType: 'text' }).subscribe(iconText => {
      this.iconHtml = this.sanitizer.bypassSecurityTrustHtml(iconText);
    });

    this.setColor();
    this.setSize();
  }

  setColor() {
    if (
      this.color &&
      Object.values(SvgIconColor).includes(this.color as SvgIconColor)
    ) {
      this.class = this.color;
    } else if (this.color) {
      this.style = { ...this.style, fill: this.color };
    }
  }

  setSize() {
    if (!this.size) return;

    const sizeArray = this.size.split(' ');
    let width = '';
    let height = '';

    switch (sizeArray.length) {
      case 1:
        width = sizeArray[0];
        height = sizeArray[0];
        break;

      case 2:
        width = sizeArray[0];
        height = sizeArray[1];
        break;
    }

    this.style = { ...this.style, width, height };
  }
}
