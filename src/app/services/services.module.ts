import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MagicSearchInputComponent } from '@shared/components/magic-search-input/magic-search-input.component';
import { ImagePickerComponent } from '@shared/components/image-picker/image-picker.component';

@NgModule({
  declarations: [ServicesRoutingModule.Components],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    MagicSearchInputComponent,
    ImagePickerComponent,
  ],
})
export class ServicesModule {}
