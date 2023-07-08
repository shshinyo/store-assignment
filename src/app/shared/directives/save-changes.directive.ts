import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSaveChanges]',
})
export abstract class SaveChangesDirective implements OnSaveChanges {
  abstract formChanges: boolean;

  @HostListener('window:beforeunload', ['$event'])
  async unloadNotification($event: any) {
    if (this.formChanges) {
      $event.returnValue = true;
    }
  }
}

export interface OnSaveChanges {
  formChanges: boolean;
}
