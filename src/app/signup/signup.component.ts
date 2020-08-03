import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  first_name : string ="";
  last_name : string ="";
  id : string ="";
  email : string ="";
  password : string = "";
  cnf_password : string ="";

  constructor() { }

  ngOnInit(): void {
    $('#confirm_password').on('mouseleave', function () {
      if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Password matches').css('color', 'green');
      } else 
        $('#message').html("Password didn't match, kindly re-enter").css('color', 'red');
    });
  }
  onSubmit(form : NgForm){
    console.log("in submit" + form.valid)
  }

 
}
