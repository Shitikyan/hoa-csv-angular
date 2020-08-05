import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [LayoutModule, DropdownModule, FileUploadModule, TableModule, ButtonModule],
})
export class SharedModule { }
