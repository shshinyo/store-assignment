import { Component, Input, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideToggleService } from '../../services/side-toggle.service';
import { ButtonTypes } from '../../utils/button-properties';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Animations } from '@shared/animations/animations';
import { AuthService } from 'src/app/core/auth/auth-service.service';
import { User } from 'src/app/core/utils/login-user.interface';

@Component({
  selector: 'page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss'],
  animations: [Animations],
})
export class PageComponentComponent {
  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _navigation: NavigationService,
    private readonly _sideToggleService: SideToggleService,
    private readonly _authService: AuthService
  ) {}

  @Input() public pageTitle: string = '';

  public readonly hasHistory: Signal<boolean> = this._navigation.hasHistory;

  public readonly user: Signal<User | null> = this._authService.user;

  public readonly title: Signal<string | undefined> = toSignal(
    this._route.title,
    { initialValue: undefined }
  );

  public readonly ButtonTypes = ButtonTypes;

  public onToggleSide = (): void => this._sideToggleService.toggle();

  public signOut = (): void => this._authService.signOut();

  public onBack = (): void => this._navigation.back();
}
