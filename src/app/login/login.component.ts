import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
   OnSubmit2(){
      let Data:any={};
      Data.email=this.login.value.Email;
      Data.password=this.login.value.Password;

      let d:any = localStorage.getItem("user-data");
      let parse_data = JSON.parse(d);

    // console.log(parse_data);

    if(parse_data['email']==Data.email && parse_data['password']==Data.password)
        this.route.navigate(['/data'])
    
    else
      alert("Incorect Username And Password");
    
   }
 
   login= new FormGroup({
    Email: new FormControl('',[Validators.required,Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.pattern('[A-Z,a-z,0-9]')])
   });

   get control(){
     return this.login.controls;
   }
   
}
