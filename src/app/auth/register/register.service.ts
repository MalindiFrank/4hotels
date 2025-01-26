import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private auth: Auth = getAuth();

  constructor() {}

  signup(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
