import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent {
  constructor(public router : Router){}
  getStarted(){
    this.router.navigate(['popmap'])
  }
}
