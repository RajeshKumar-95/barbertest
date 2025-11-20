import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { BookingFormComponent } from './user/booking-form/booking-form.component';
import { AppointmentDisplayComponent } from './user/appointment-display/appointment-display.component';
import { ReportComponent } from './admin/report/report.component';
import { LogoComponent } from './reusables/logo/logo.component';
import { BackgroundComponent } from './reusables/background/background.component';
import { FormsModule } from '@angular/forms';
import { BarberActionsComponent } from './admin/barber-actions/barber-actions.component';
import { AuthService } from './core/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './core/auth/auth.guard';
import { ErrorComponent } from './reusables/error/error.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';
import { ActionsButtonsComponent } from './reusables/actions-buttons/actions-buttons.component';
import { ToasterComponent } from './reusables/notifications/toaster/toaster.component';
import { ToasterService } from './reusables/notifications/toaster/toaster.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    BookingFormComponent,
    AppointmentDisplayComponent,
    ReportComponent,
    LogoComponent,
    BackgroundComponent,
    BarberActionsComponent,
    ErrorComponent,
    DashboardComponent,
    DashboardHomeComponent,
    ActionsButtonsComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
