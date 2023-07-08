import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { Endpoints } from 'src/app/core/utils/endpoints';
import {
  GetService,
  ServicesList,
} from '../utils/interfaces/services.interface';
import { CreateEditServicePayload } from '../utils/interfaces/add-edit-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public constructor(
    private readonly _connectionService: ConnectionService,
    private readonly _translateService: TranslateService,
    private readonly _toasterService: ToastrService
  ) {}

  private readonly endpoints: Endpoints = new Endpoints();

  public allServices$: Observable<ServicesList> = this._connectionService.get(
    this.endpoints.services.getAllServices
  );

  public getService = (serviceId: number): Observable<GetService> =>
    this._connectionService.get(this.endpoints.services.getService + serviceId);

  public deleteService = (serviceId: number): Observable<unknown> =>
    this._connectionService
      .delete(this.endpoints.services.deleteService + serviceId)
      .pipe(
        tap(() =>
          this._toasterService.success(
            this._translateService.instant('deleteSuccess')
          )
        )
      );

  public createNewService = (
    payload: CreateEditServicePayload
  ): Observable<unknown> =>
    this._connectionService
      .post(this.endpoints.services.addNewService, payload)
      .pipe(
        tap(() =>
          this._toasterService.success(
            this._translateService.instant('servicesCreatedSuccess')
          )
        )
      );

  public updateService = (
    payload: CreateEditServicePayload
  ): Observable<unknown> =>
    this._connectionService
      .put(this.endpoints.services.updateService + payload?.data.id, payload)
      .pipe(
        tap(() =>
          this._toasterService.success(
            this._translateService.instant('servicesUpdateSuccess')
          )
        )
      );
}
