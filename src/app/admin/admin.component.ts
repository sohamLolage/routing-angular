import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { user } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  constructor(private ser:UserService) { 
  }

  ngOnInit(): void {
    
  }


}
