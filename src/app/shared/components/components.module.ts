import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BorderComponent } from './border/border.component';
import { InputComponent } from './input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputDisabledComponent } from './input/input-disabled/input-disabled.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    BorderComponent,
    InputComponent,
    InputDisabledComponent,
    TableComponent,
  ],
  imports: [
    ButtonModule,
    RouterModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    BorderComponent,
    InputComponent,
    InputDisabledComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
