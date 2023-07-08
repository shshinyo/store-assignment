import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Animations } from '@shared/animations/animations';
import { ButtonColors, ButtonTypes } from '@shared/utils/button-properties';
import {
  ProductListController,
  QUERY,
} from '../../utils/models/products-list-controller.model';
import { PageEvent } from '@angular/material/paginator';
import { Observable, from } from 'rxjs';
import {
  concatMap,
  debounceTime,
  filter,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ParamsHelper } from '@shared/helpers/param-helper';
import { ProductsService } from '../../services/products.service';
import { Datum, ProductsList } from '../../utils/interfaces/products.interface';
import { ConfirmationDialogService } from '@shared/components/confirmation-dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [Animations],
})
export class ProductsListComponent implements OnInit {
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _destroyRef: DestroyRef,
    private readonly _productsService: ProductsService,
    private readonly _confirmService: ConfirmationDialogService,
    private readonly _translateService: TranslateService
  ) {}

  public search: FormControl<string | null> = this._fb.control(null);

  public productListController = new ProductListController<Datum>();

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public ngOnInit(): void {
    this._paramsChanges();
    this._searchChangeHandler();
  }

  public onDeleteProduct = (prod: Datum): void => {
    this._confirmService
      .Confirm(
        `${
          this._translateService.instant('from') +
          ' ' +
          this._translateService.instant('delete')
        } (${prod.attributes?.name.split('').slice(0, 40).join('')}...) ?`,
        this._translateService.instant('sure'),
        this._translateService.instant('delete')
      )
      .pipe(
        take(1),
        filter(Boolean),
        concatMap(() => this._productsService.deleteProduct(prod.id)),
        switchMap(() => this._getProducts())
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

          this.productListController = new ProductListController({
            ...this.productListController,
            ...queryParams,
          });

          this.search.patchValue(queryParams?.search);
        }),
        switchMap(() => this._getProducts()),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  };

  private _getProducts = (): Observable<ProductsList> => {
    this.productListController.dataLoaded = false;
    const { index, size, search } = this.productListController;

    return this._productsService.allProducts$.pipe(
      tap((res: ProductsList) => {
        if (res?.data.length) {
          this.productListController.list = (
            search
              ? res?.data.filter((prod: Datum) =>
                  prod?.attributes?.name
                    ?.toLowerCase()
                    .includes(search?.toLowerCase() as string)
                )
              : res?.data
          )?.slice(
            index ? (index as number) * (size as number) : 0,
            index ? (index as number) * (size as number) + 10 : size
          );

          this.productListController.totalLength = res?.meta?.pagination?.total;

          this.productListController.totalPrice = res?.data.reduce(
            (acc, prod: Datum) =>
              acc +
              Number((prod?.attributes?.price || '0').replace(/[$]/g, '')),
            0
          );
        }
        this.productListController.dataLoaded = true;
      })
    );
  };
}
