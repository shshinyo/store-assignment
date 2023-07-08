import { Breakpoints } from '@angular/cdk/layout';
import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SideToggleService } from '@shared/services/side-toggle.service';
import { map } from 'rxjs/operators';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class LayoutContainerComponent {
  public constructor(
    private readonly _sideToggleService: SideToggleService,
    private readonly _breakpointObserver: BreakpointObserverService
  ) {}

  public readonly sideToggled: Signal<boolean> =
    this._sideToggleService.sideToggled;

  public readonly Breakpoints = Breakpoints;

  public isSmallScreen: Signal<boolean> = toSignal(
    this._breakpointObserver.currentBreakpoint$.pipe(
      map(
        (val: string) => val === Breakpoints.Small || val === Breakpoints.XSmall
      )
    ),
    { initialValue: false }
  );
}
