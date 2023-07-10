import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { ButtonComponent } from './components/button-action/button/button.component';
import { ShimmerLoadingComponent } from './components/shimmer-loading/shimmer-loading.component';
import { TableComponent } from './components/table/table.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { LanguageComponent } from './components/language/language.component';
import { MagicSearchInputComponent } from './components/magic-search-input/magic-search-input.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginator } from './services/custom-mat-paginator.service';
import { TranslateModule } from '@ngx-translate/core';
import { DialogComponent } from './components/dialog/dialog-ui.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PageComponentComponent } from './components/page-component/page-component.component';
import { PromotionFormFieldComponent } from './forms/promotion-form-field/promotion-form-field.component';

const DIRECTIVES: any[] = [HighlightDirective];

const PIPES: any[] = [];

const UI_COMPONENTS: any[] = [
  ButtonComponent,
  NoDataComponent,
  DialogComponent,
  PageComponentComponent,
];

const THIRD_MODULES: any[] = [
  MaterialModule,
  TableComponent,
  ShimmerLoadingComponent,
  LanguageComponent,
  MagicSearchInputComponent,
  NgOptimizedImage,
  TranslateModule,
  PromotionFormFieldComponent,
];

const COMMON_MODULES: any[] = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...UI_COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...COMMON_MODULES, ...THIRD_MODULES],
  exports: [
    ...COMMON_MODULES,
    ...THIRD_MODULES,
    ...UI_COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginator,
    },
  ],
})
export class SharedModule {}
