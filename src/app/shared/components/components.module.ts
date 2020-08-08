import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BorderComponent } from './border/border.component';


@NgModule({
  declarations: [
    BorderComponent
  ],
  imports: [
    ButtonModule,
    RouterModule
  ],
  exports: [
    BorderComponent
  ]
})
export class ComponentsModule { }
