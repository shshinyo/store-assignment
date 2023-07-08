import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideToggleService {
  public sideToggled: WritableSignal<boolean> = signal<boolean>(false);

  public toggle = (): void => this.sideToggled.set(!this.sideToggled());

  public open = (): void => this.sideToggled.set(true);

  public close = (): void => this.sideToggled.set(false);
}
