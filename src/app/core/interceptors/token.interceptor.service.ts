import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StatusCodes } from '../api/models/status-codes';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginResponse } from '../utils/login-user.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public constructor(
    private readonly _router: Router,
    private readonly _storage: LocalStorageService
  ) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers: any = {
      Authorization: `Bearer ${
        (this._storage.get('current_user') as LoginResponse)?.jwt || ''
      }`,
    };

    req = req.clone({ setHeaders: headers });

    return next
      .handle(req)
      .pipe(catchError((err) => this._handleErrorReq(err)));
  }

  private _handleErrorReq = (error: HttpErrorResponse): Observable<never> => {
    if (error.status === StatusCodes.Unauthorized) {
      this._storage.remove('current_user');

      setTimeout(() => this._router.navigateByUrl('/login'));

      return EMPTY;
    }

    return throwError(() => error);
  };
}
