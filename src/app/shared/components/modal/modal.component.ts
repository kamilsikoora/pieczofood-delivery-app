import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  private element!: HTMLElement;
  @Input() title!: string;

  constructor(private modalService: ModalService, private el: ElementRef) {}

  ngOnInit() {
    this.element = this.el.nativeElement;
    document.body.appendChild(this.element);

    this.element.addEventListener('click', () => this.close());
    this.modalService.add(this);
  }

  open() {
    this.element.style.display = 'flex';
  }

  close() {
    this.element.style.display = 'none';
  }

  ngOnDestroy() {
    this.modalService.remove(this.title);
  }
}
