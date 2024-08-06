import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginResponseInterface} from "../interface/login-response.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)


  login(payload: {email: string, password: string}): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>("http://localhost:8080/api/auth/login", payload)
  }

  register(payload: {email: string, password: string}){
    return this.http.post("http://localhost:8080/api/auth/registration", payload)
  }
}
