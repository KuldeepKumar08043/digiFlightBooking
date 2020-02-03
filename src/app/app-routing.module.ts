import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDashboardComponent } from './container/booking-dashboard/booking-dashboard.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './container/login/login.module#LoginModule'
  },
  {
    path: 'booking-dashboard',
    component: BookingDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
