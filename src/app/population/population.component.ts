import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent {

  searchPopulation: string = ""

  constructor(public userService : UserService, public router : Router){}
  // user = "";

  // BACKEND SUBMISSION
  allUsers : any

  // obj = {
  //   firstname : "Ola",
  //   lastname  : "Ok",
  //   email : "olaola@gmail.com",
  //   password : "olaola1234"
  // }

 ngOnInit(){

  this.userService.getFrontend().subscribe((res)=>{
    console.log(res)
    this.allUsers = res
  })

  // this.userService.postFrontend(this.obj).subscribe((res)=>{
  //   console.log(res)
  // })  

} 

userPage(){
  this.router.navigate(['population'])
}

}
