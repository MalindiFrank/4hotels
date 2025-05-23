import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  signupForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    username: FormControl<string | null>;
  }>;

  // private auth = getAuth();
  // private db = getDatabase();

  username: string | null | undefined = null;
  errorMessage: string | null = null;

  constructor(
    // private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    //set form validation
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  //getter for access to form controls
  get f() {
    return this.signupForm.controls;
  }

  //handle and validate form submission
  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }

    // const { email, password, username } = this.signupForm.value;

    // this.authService
    //   .signup(email as string, password as string)
    //   .then(() => {
    //     console.log('Account created successfully');

    //     onAuthStateChanged(this.auth, async (user) => {
    //       set(ref(this.db, 'users/' + user?.uid), {
    //         name: username?.toUpperCase(),
    //         email: email,
    //       });
    //     });

    //     this.router.navigate(['/home']);
    //   })
    //   .catch((error: any) => {
    //     this.errorMessage = error.message;
    //     console.log('Error: ', this.errorMessage);
    //   });
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
