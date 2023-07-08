import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { Endpoints } from 'src/app/core/utils/endpoints';
import {
  GetProduct,
  ProductsList,
} from '../utils/interfaces/products.interface';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CreateEditProductPayload } from '../utils/interfaces/add-edit-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public constructor(
    private readonly _connectionService: ConnectionService,
    private readonly _translateService: TranslateService,
    private readonly _toasterService: ToastrService
  ) {}

  private readonly endpoints: Endpoints = new Endpoints();

  public allProducts$: Observable<ProductsList> = this._connectionService.get(
    this.endpoints.products.getAllProducts
  );

  public getProduct = (prodId: number): Observable<GetProduct> =>
    this._connectionService.get(this.endpoints.products.getProduct + prodId);

  public deleteProduct = (prodId: number): Observable<unknown> =>
    this._connectionService
      .delete(this.endpoints.products.deleteProduct + prodId)
      .pipe(
        tap(() =>
          this._toasterService.success(
            this._translateService.instant('deleteSuccess')
          )
        )
      );

  public createNewProduct = (
    payload: CreateEditProductPayload
  ): Observable<unknown> =>
    this._connectionService
      .post(this.endpoints.products.addNewProduct, payload)
      .pipe(
        tap(() =>
          this._toasterService.success(
            this._translateService.instant('prodCreatedSuccess')
          )
        )
      );

  public updateProduct = (
    payload: CreateEditProductPayload
  ): Observable<unknown> =>
    this._connectionService
      .put(this.endpoints.products.updateProduct + payload?.data.id, payload)
      .pipe(
        tap(() =>
          this._toasterService.success(
            this._translateService.instant('prodUpdateSuccess')
          )
        )
      );
}
