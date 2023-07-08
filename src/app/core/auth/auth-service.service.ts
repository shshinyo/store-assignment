import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';
import { IUserPayload } from '../utils/user.model';
import { Endpoints } from '../utils/endpoints';
import { LoginResponse, User } from '../utils/login-user.interface';
import { SnackBarService } from '../services/modal.service';
import { ConnectionService } from '../services/connection.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    private readonly _connectionService: ConnectionService,
    private readonly _router: Router,
    private readonly _storage: LocalStorageService,
    private readonly _snack: SnackBarService
  ) {
    this._getUser();
  }

  private readonly _endpoints = new Endpoints();

  public user: WritableSignal<User | null> = signal<User | null>(null);

  public isAuthenticated: Signal<boolean> = computed(() => !!this.user());

  public login = (payload: IUserPayload): Observable<LoginResponse> =>
    this._connectionService
      .post(this._endpoints.authentication.login, payload)
      .pipe(
        tap((res: LoginResponse) => {
          this._snack.snackbar('Login success', 'success');
          this._storage.set('current_user', res);
          this._getUser();
        })
      );

  public signOut = (): void => {
    this._storage.remove('current_user');
    this._getUser();
    this._router.navigateByUrl('/');
  };

  private _getUser = (): void => {
    this.user.set((this._storage.get('current_user') as LoginResponse)?.user);
  };
}
