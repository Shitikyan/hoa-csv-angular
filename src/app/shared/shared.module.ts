import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  exports: [LayoutModule, DropdownModule, FileUploadModule],
})
export class SharedModule {}
