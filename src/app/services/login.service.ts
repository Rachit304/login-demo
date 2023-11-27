import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookie : CookieService ) { }

  isLogin: boolean = false;

  login(username: string, password: string) : boolean {

    if(username == 'Rachit' && password == 'rachit')
      {
        this.cookie.set('username', username);
        this.cookie.set('password', password);
        console.log("Login Successfull");
        this.isLogin = true;
        return true;
      }
    else
    {

      return false;
    }
  }

  logout(): void {
    this.cookie.delete('username');
    this.cookie.delete('password');
    this.isLogin = false;
  }
  
}
