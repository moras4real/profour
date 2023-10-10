import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient ) { }

  public getFrontend(){
    return this.http.get("https://prophp.infinityfreeapp.com/dashboard.php");
   }

  
  //  public getFrontend(){
  //   return this.http.get("http://localhost/prophp/dashboard.php");
  //  }
   
  // public postFrontend(obj:any){
  //    return this.http.post("http://localhost/firstfolder/dashboard.php",obj);
  //   }
}
