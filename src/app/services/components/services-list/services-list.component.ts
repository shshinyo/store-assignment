import { Component, DestroyRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationDialogService } from '@shared/components/confirmation-dialog';
import { ServicesService } from '../../services/services.service';
import { ButtonColors, ButtonTypes } from '@shared/utils/button-properties';
import { Observable, from } from 'rxjs';
import {
  concatMap,
  debounceTime,
  filter,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { ParamsHelper } from '@shared/helpers/param-helper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PageEvent } from '@angular/material/paginator';
import {
  QUERY,
  ServicesListController,
} from '../../utils/models/services-list-controller.model';
import { Datum, ServicesList } from '../../utils/interfaces/services.interface';
import { Animations } from '@shared/animations/animations';

@Component({
  selector: 'services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  animations: [Animations],
})
export class ServicesListComponent {
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _destroyRef: DestroyRef,
    private readonly _servicesService: ServicesService,
    private readonly _confirmService: ConfirmationDialogService,
    private readonly _translateService: TranslateService
  ) {}

  public search: FormControl<string | null> = this._fb.control(null);

  public servicesListController = new ServicesListController<Datum>();

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public ngOnInit(): void {
    this._paramsChanges();
    this._searchChangeHandler();
  }

  public onDeleteProduct = (service: Datum): void => {
    this._confirmService
      .Confirm(
        `${
          this._translateService.instant('from') +
          ' ' +
          this._translateService.instant('delete')
        } (${service.attributes?.name.split('').slice(0, 40).join('')}...) ?`,
        this._translateService.instant('sure'),
        this._translateService.instant('delete')
      )
      .pipe(
        take(1),
        filter(Boolean),
        concatMap(() => this._servicesService.deleteService(service.id)),
        switchMap(() => this._getServices())
      )
      .subscribe();
  };

  public onPageChange = (page: PageEvent): void => {
    from(
      this._router.navigate([], {
        queryParams: {
          [QUERY.INDEX]: page.pageIndex || null,
          [QUERY.SIZE]: page.pageSize || null,
        },
        queryParamsHandling: 'merge',
      })
    )
      .pipe(take(1))
      .subscribe();
  };

  private _searchChangeHandler = (): void => {
    this.search.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((val: any) =>
          from(
            this._router.navigate([], {
              queryParams: {
                [QUERY.SEARCH]: val || null,
              },
              queryParamsHandling: 'merge',
            })
          )
        ),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _paramsChanges = (): void => {
    this._route.queryParamMap
      .pipe(
        tap((params: ParamMap) => {
          const queryParams = {
            index: ParamsHelper.indexPage(params, QUERY.INDEX),
            size: ParamsHelper.indexSize(params, QUERY.SIZE),
            search: ParamsHelper.search(params, QUERY.SEARCH) as string,
          };

          this.servicesListController = new ServicesListController({
            ...this.servicesListController,
            ...queryParams,
          });

          this.search.patchValue(queryParams?.search);
        }),
        switchMap(() => this._getServices()),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _getServices = (): Observable<any> => {
    this.servicesListController.dataLoaded = false;
    const { index, size, search } = this.servicesListController;

    return this._servicesService.allServices$.pipe(
      tap((res: ServicesList) => {
        if (res?.data.length) {
          this.servicesListController.list = (
            search
              ? res?.data.filter((service: Datum) =>
                  service?.attributes?.name
                    ?.toLowerCase()
                    .includes(search?.toLowerCase() as string)
                )
              : res?.data
          )?.slice(
            index ? (index as number) * (size as number) : 0,
            index ? (index as number) * (size as number) + 10 : size
          );

          this.servicesListController.totalLength =
            res?.meta?.pagination?.total;

          this.servicesListController.totalPrice = res?.data.reduce(
            (acc, prod: Datum) =>
              acc +
              Number((prod?.attributes?.price || '0').replace(/[$]/g, '')),
            0
          );
        }
        this.servicesListController.dataLoaded = true;
      })
    );
  };
}
