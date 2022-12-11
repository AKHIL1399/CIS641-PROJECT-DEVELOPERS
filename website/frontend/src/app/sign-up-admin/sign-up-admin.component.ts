import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up-admin',
  templateUrl: './sign-up-admin.component.html',
  styleUrls: ['./sign-up-admin.component.css']
})
export class SignUpAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  SignUp(regForm:any){
         console.log(regForm);
         this.router.navigate(['/sign-in']);
  }
}
