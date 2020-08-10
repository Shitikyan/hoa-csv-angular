import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  exports: [
    LayoutModule,
    DropdownModule,
    FileUploadModule,
    TableModule,
    ButtonModule,
    ComponentsModule,
    InputTextModule,
  ]
})
export class SharedModule {}
