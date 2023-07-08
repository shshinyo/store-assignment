import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  public constructor(
    private readonly _router: Router,
    private readonly _location: Location
  ) {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((event) => {
          if (event instanceof NavigationEnd) {
            !this._history().includes(event.urlAfterRedirects) &&
              this._history.mutate((val: string[]) =>
                val.push(event.urlAfterRedirects)
              );
          }
        })
      )
      .subscribe();
  }

  private _history: WritableSignal<string[]> = signal([]);

  // Read only signal
  public readonly history: Signal<string[]> = computed(() => this._history());

  public hasHistory: Signal<boolean> = computed(
    () => this._history().length > 1
  );

  public back = (): void => {
    this._history.mutate((val: string[]) => val.pop());

    if (this.history().length > 0) this._location.back();
    else this._router.navigate(['/']);
  };
}
