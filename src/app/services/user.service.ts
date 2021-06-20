import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public addUser(user:any){
    console.log("i am in user service");
    
    return this.http.post(`http://localhost:8080/user/`, user);
  }
  public getAlluser():Observable<any>
  {
    return this.http.get(`http://localhost:8080/user/`);
  }
  public getUser(userName:string):Observable<any>
  {
    console.log("i am in user service");
    
    return this.http.get(`http://localhost:8080/user/${userName}`)
  }
  public deleteUser(id:any):Observable<any>{
    console.log("i am i n service");
    return this.http.delete(`http://localhost:8080/user/${id}`);
  }
  public updateUser(user:any){
    console.log("i am update service");
    
    return this.http.put(`http://localhost:8080/user/`,user);
  }

}
