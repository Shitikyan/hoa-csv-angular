import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BatchComponent } from './batch/batch.component';
import { BatchDetailsComponent } from './batch/batch-details/batch-details.component';
import { BatchRowDetailsComponent } from './batch/batch-row-details/batch-row-details.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HomeComponent, BatchComponent, BatchDetailsComponent, BatchRowDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
