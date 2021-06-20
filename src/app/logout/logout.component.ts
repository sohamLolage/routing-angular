import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router) {
    localStorage.removeItem('user');
    localStorage.clear();
    setTimeout(()=>{
      this.route.navigate([""]);
    },2000);
    
   }

  ngOnInit(): void {
  }

}
