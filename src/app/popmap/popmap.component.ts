import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popmap',
  templateUrl: './popmap.component.html',
  styleUrls: ['./popmap.component.css']
})
export class PopmapComponent {  
  // link = 'https://www.google.com/maps" target="_blank" rel="noopener'
  constructor(public  router : Router){}
  getStarted(){
    this.router.navigate(['population'])
  }
}
