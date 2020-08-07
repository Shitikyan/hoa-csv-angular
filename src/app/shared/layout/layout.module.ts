import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    ButtonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule {}
