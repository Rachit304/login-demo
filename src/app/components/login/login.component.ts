import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = ''; 

  constructor( 
    
    private loginService: LoginService,
    private router: Router,
    private cookie : CookieService,

  )
  {}

  ngOnInit(): void {
    console.log(document.querySelectorAll('*'));
    if(this.loginService.login(this.cookie.get('username'),this.cookie.get('password')))
    { 
      this.router.navigate(['/home']);
    }
  }
  public login(): void {

    if(this.loginService.login(this.username,this.password))
    { 
     
      this.router.navigate(['/home']);
    }
    else
    {
      alert("Invalid Username and Password");
      this.username = '';
      this.password = '';
    }
  } 
}

export { LoginService };
