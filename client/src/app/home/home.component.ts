import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  user: object;

  constructor(private auth: AuthService) { }

  passRole(role) {
    return role;
  }

  ngOnInit() {
    console.log(this.auth.user);
  }

}
