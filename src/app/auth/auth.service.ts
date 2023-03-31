import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponse {
    email : string,
    passwordHash : string,
    token? : string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>('http://localhost:3000/api/v1/ngUsers/register', {
      email: email,
      password: password,
    }).pipe(catchError(error => {
        let errorMessage = "An error occurred during User Registration!";
        return throwError(errorMessage)
    }));
  }

  login(email: string, password: string){
    return this.http.post<AuthResponse>(
        'http://localhost:3000/api/v1/ngUsers/login',
        {
            email: email,
            password : password
        }
    ).pipe(catchError(error => {
        let errorMessage = "An error occurred during Logging In!";
        return throwError(errorMessage)
    }))
  }
}
