import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BatchComponent } from './batch/batch.component';
import { BatchDetailsComponent } from './batch/batch-details/batch-details.component';
import { BatchRowDetailsComponent } from './batch/batch-row-details/batch-row-details.component'
import { BatchRowAcceptComponent } from './batch/batch-row-accept/batch-row-accept.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'batches', component: BatchComponent },
  { path: 'batches/:id', component: BatchDetailsComponent },
  { path: 'batch/details/:id', component: BatchRowDetailsComponent },
  { path: 'batch/details/:id/accept', component: BatchRowAcceptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
