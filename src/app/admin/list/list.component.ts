import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:user[]=[];
  constructor(private ser:UserService,private route:Router) { }

  ngOnInit(): void {
    this.ser.getAlluser().subscribe(
      (data)=>{
       this.users=data;
      },
      (error)=>{
         alert("data not fetch form restApi");
      }
      );
   
  }
  onEdit(user:any){
   

  }
  onDelete(user:any){
    console.log("i am in delete");
    console.log(user);
    
    this.ser.deleteUser(user.id).subscribe(
      (data)=>{
       
        Swal.fire("Delete","Delete user successfully",'success')
        this.ser.getAlluser().subscribe(
          (data)=>{
           this.users=data;
          },
          (error)=>{
             alert("data not fetch form restApi");
          }
          );
      },
      (error)=>{
        Swal.fire('Fail','Something went wrong','error');
      }
    )

    
    
  }

}
