import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/welcomepage/welcomepage.component').then(
        (m) => m.WelcomepageComponent
      ),
  },
  {
    path: 'rooms',
    loadComponent: () =>
      import('./pages/rooms/rooms.component').then((m) => m.RoomsComponent),
  },
  {
    path: 'rooms/:id',
    loadComponent: () =>
      import('./components/room/room.component').then((m) => m.RoomComponent),
  },
  {
    path: 'bookings',
    loadComponent: () =>
      import('./pages/bookings/bookings.component').then(
        (m) => m.BookingComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings/:id',
    loadComponent: () =>
      import('./components/booking/booking.component').then(
        (m) => m.BookingComponent
      ),
  },
  {
    path: 'feedback',
    loadComponent: () =>
      import('./pages/feedback/feedback.component').then(
        (m) => m.FeedbackComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/homepage/homepage.component').then(
        (m) => m.HomepageComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/manage-rooms',
    loadComponent: () =>
      import('./pages/admin/manage-bookings/manage-bookings.component').then(
        (m) => m.ManageBookingsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/manage-bookings',
    loadComponent: () =>
      import('./pages/admin/manage-rooms/manage-rooms.component').then(
        (m) => m.ManageRoomsComponent
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
