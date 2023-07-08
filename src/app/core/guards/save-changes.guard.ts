import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationDialogService } from '@shared/components/confirmation-dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveChangesGuard {
  public constructor(
    private readonly _confirmService: ConfirmationDialogService,
    private readonly _translateService: TranslateService
  ) {}

  public saveChangesGuard = (): Observable<boolean> =>
    this._confirmService.Confirm(
      this._translateService.instant('saveChangesMsg'),
      '',
      this._translateService.instant('discardChanges'),
      this._translateService.instant('continueEditing')
    );

  public canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component?.formChanges ? this.saveChangesGuard() : true;
  }
}
