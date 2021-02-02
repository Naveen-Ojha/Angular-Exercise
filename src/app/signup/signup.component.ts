import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(){
  let data:any={};
  data.firstName=this.signup.value.FirstName;
  data.lastname=this.signup.value.LastName;
  data.email=this.signup.value.Email;
  data.password=this.signup.value.Password;
  data.phone=this.signup.value.Phone;
  data.address=this.signup.value.Address;
  data.gender=this.signup.value.Gender;

   console.log(data);

  var user= localStorage.setItem("user-data",JSON.stringify(data));
  user = alert("Submited successful");
  }

 

  signup=new FormGroup({
    FirstName: new FormControl('', [Validators.required, Validators.pattern('[A-Z,a-z]{4,30}')]),
    LastName: new FormControl('',[Validators.required,Validators.pattern('[A-Z,A-z]{2,10}')]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.pattern('[A-Z,a-z,0-9]{4,12}')]),
    Phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    Address: new FormControl('',[Validators.required,Validators.pattern('[a-z,A-z," "]{4,40}')]),
    Gender: new FormControl('',[Validators.required])
  });

  get control(){
    return this.signup.controls;
  }

}
