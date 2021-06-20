import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { user } from '../Model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  userName:"",
  password:""
}
user1?:user;
  constructor(private ser:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user);
    this.ser.getUser(this.user.userName).subscribe(
      (data:user)=>{
        if(data.password===this.user.password){
          this.user1=data;
          localStorage.setItem("user",JSON.stringify(this.user1));
          this.go();
        }
        else{
          Swal.fire('Unauthorized','please enter correct usrname','error')
        }
      },
      (error)=>{
          Swal.fire('Unauthorized','please enter correct usrname','error')
      }
    );
    

  }
  go(){
    this.route.navigate(["/admin"]);
  }
}
