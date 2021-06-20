import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user:any;
  constructor(private route:Router, private activatedRoute:ActivatedRoute,
    private ser:UserService) { 
    console.log(this.route.getCurrentNavigation()?.extras.state);
    this.user=this.route.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    
   
  }
  onSubmit(userUpdated:any){
    console.log(userUpdated);
    userUpdated.password=this.user.password;
    userUpdated.id=this.user.id;
    this.ser.updateUser(userUpdated).subscribe((data)=>{
      Swal.fire('Update','information is updates','success')
    },
    (error)=>{
        Swal.fire('Fail','user nat updated','error');
    });

    this.route.navigate(['/admin/list']);
    
  }



}
