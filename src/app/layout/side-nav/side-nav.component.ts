import { Breakpoints } from '@angular/cdk/layout';
import { Component, Input, Signal } from '@angular/core';
import { SideToggleService } from 'src/app/shared/services/side-toggle.service';
import { ButtonTypes } from 'src/app/shared/utils/button-properties';
import { MENU } from './models/menu';
import { Animations } from '@shared/animations/animations';
import { MenuItem } from './models/menu.interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [Animations],
})
export class LayoutSideNavComponent {
  public constructor(private readonly _sideToggleService: SideToggleService) {}

  @Input() public isSmallScreen: boolean = false;

  public readonly sideToggled: Signal<boolean> =
    this._sideToggleService.sideToggled;

  public readonly menuItems: MenuItem[] = MENU;

  public readonly Breakpoints = Breakpoints;

  public readonly ButtonTypes = ButtonTypes;

  public onSelectTap(): void {
    if (this.isSmallScreen) this._sideToggleService.close();
  }
}
