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
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  roomFeedbackForm: FormGroup<{
    rating: FormControl<null>;
    comment: FormControl<string | null>;
  }>;

  errorMessage: string | null = null;
  isPopUp: boolean = false;
  popUpMsg: string | null = '';

  // constructor(private apiService: ApiService, private fb: FormBuilder) {
  constructor(private fb: FormBuilder) {
    this.roomFeedbackForm = this.fb.group({
      rating: [null, [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }

  //getter for easy access to form controls, **more to note
  get f() {
    return this.roomFeedbackForm.controls;
  }

  async onSubmit() {
    const { rating, comment } = this.roomFeedbackForm.value;

    try {
      // await this.apiService.addProduct({
      await {
        userId: '',
        roomId: '',
        rating: rating,
        comment: comment,
        timestamp: Date.now(),
      };

      this.popUp('Feedback saved succesfully!');
    } catch (error) {
      this.popUp('Something Wrong Happened, Feedback not saved');
      console.error('Error: ', error);
    }
  }

  popUp(msg: string) {
    this.popUpMsg = msg;
    this.isPopUp = true;
    setTimeout(() => (this.isPopUp = false), 2999);
  }
}
