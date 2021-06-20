import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  details={
    userName:'',
    email:'',
    password:'',
    contact:"",
    city:""
  }
   
 

  constructor(private userser:UserService,private route:Router) {
    
   }

  ngOnInit(): void {
  }
  onSubmit(userObj:any){
    console.log(userObj);

    this.userser.addUser(this.details).subscribe(
      (data)=>{
       Swal.fire('Sucess','User register suceessfully','success')
       this.go();
      },
      (error)=>{
        Swal.fire('Server Not responding','User register suceessfully','error')
      }
      );
    
   
    

  }
go(){
  this.route.navigate(['/login']);
}
}
