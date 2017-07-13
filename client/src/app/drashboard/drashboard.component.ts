import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-drashboard',
  templateUrl: './drashboard.component.html',
  styleUrls: ['./drashboard.component.css']
})
export class DrashboardComponent implements OnInit,OnDestroy {
  public chuyen= false;
  constructor() { }
  ngOnInit() {

  }
  ngOnDestroy() {
   
  }
  chuyenMenu(){
    this.chuyen = !this.chuyen;
  }
}
