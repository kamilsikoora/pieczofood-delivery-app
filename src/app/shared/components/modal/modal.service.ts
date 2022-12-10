import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: ModalComponent[] = [];

  private findModalByTitle(title: string) {
    return this.modals.find(x => x.title === title);
  }

  add(modal: ModalComponent) {
    this.modals.push(modal);
  }

  remove(title: string) {
    this.modals = this.modals.filter(x => x.title !== title);
  }

  open(title: string) {
    const modal = this.findModalByTitle(title);
    if (modal) modal.open();
  }

  close(title: string) {
    const modal = this.findModalByTitle(title);
    if (modal) modal.close();
  }
}
