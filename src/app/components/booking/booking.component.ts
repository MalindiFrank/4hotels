import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-bookings',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  roomBookingForm: FormGroup<{
    checkInDate: FormControl<any>;
    checkOutDate: FormControl<any>;
  }>;

  errorMessage: string | null = null;
  isPopUp: boolean = false;
  popUpMsg: string | null = '';

  // constructor(private apiService: ApiService, private fb: FormBuilder) {
  constructor(private fb: FormBuilder) {
    this.roomBookingForm = this.fb.group({
      checkInDate: ['', [Validators.required]],
      checkOutDate: ['', [Validators.required]],
    });
  }

  //getter for easy access to form controls, **more to note
  get f() {
    return this.roomBookingForm.controls;
  }

  async onSubmit() {
    const { checkInDate, checkOutDate } = this.roomBookingForm.value;

    try {
      // await this.apiService.addProduct({
      await {
        userId: '',
        roomId: '',
        price: 0,
        date: {
          checkIn: checkInDate,
          checkOut: checkOutDate,
        },
        status: 'confirmed',
      };

      this.popUp('Room booking added succesfully!');
    } catch (error) {
      this.popUp('Something Wrong Happened, Booking not successful');
      console.error('Error: ', error);
    }
  }

  popUp(msg: string) {
    this.popUpMsg = msg;
    this.isPopUp = true;
    setTimeout(() => (this.isPopUp = false), 2999);
  }
}
