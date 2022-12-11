import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userLogin:NavbarService,private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.userLogin.update(0);
    this.userLogin.user=null;
    this.router.navigateByUrl('/home');
  }
}
