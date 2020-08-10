import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BorderComponent } from './border/border.component';
import { InputComponent } from './input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputDisabledComponent } from './input/input-disabled/input-disabled.component';


@NgModule({
  declarations: [
    BorderComponent,
    InputComponent,
    InputDisabledComponent
  ],
  imports: [
    ButtonModule,
    RouterModule,
    InputTextModule
  ],
  exports: [
    BorderComponent,
    InputComponent,
    InputDisabledComponent
  ]
})
export class ComponentsModule { }
