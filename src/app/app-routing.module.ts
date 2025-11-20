import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { BookingFormComponent } from './user/booking-form/booking-form.component';
import { AppointmentDisplayComponent } from './user/appointment-display/appointment-display.component';
import { BarberActionsComponent } from './admin/barber-actions/barber-actions.component';
import { AuthGuard } from './core/auth/auth.guard';
import { ErrorComponent } from './reusables/error/error.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReportComponent } from './admin/report/report.component';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';

const routes: Routes = [

  {
    path: 'auth', children: [
      { path: 'login', component: LoginComponent },
      { path: 'password-recovery', component: ForgotPasswordComponent }
    ]
  },

  {
    path: 'admin', children: [
      { path: 'barber', component: BarberActionsComponent },
      {
        path: 'dashboard', children: [
          { path: '', component: DashboardHomeComponent },
          { path: 'reports', component: ReportComponent },
        ], component: DashboardComponent
      },
      { path: '', redirectTo: "admin/dashboard/reports", pathMatch: 'full' },
    ], canActivate: [AuthGuard]
  },

  {
    path: 'user', children: [
      { path: 'all-appointments', component: AppointmentDisplayComponent },
      { path: 'book-appointment', component: BookingFormComponent }
    ], canActivate: [AuthGuard]
  },
  { path: '', redirectTo: "auth/login", pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
