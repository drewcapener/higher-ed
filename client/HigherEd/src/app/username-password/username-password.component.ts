import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-password',
  templateUrl: './username-password.component.html',
  styleUrls: ['./username-password.component.scss']
})
export class UsernamePasswordComponent implements OnInit {

  username: string;
  password: string;
  outline: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username === 'drew' && this.password === 'drew') {
      this.router.navigate(['/class-archives']);
    } else {
      console.log('error logging in');//fixme
    }
  }

}
