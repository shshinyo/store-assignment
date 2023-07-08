import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor.service';
import { ErrorInterceptorService } from './error-interceptor.service';

/** Http interceptor providers in outside-in order */
export const HttpInterceptorsProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptorService,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];
