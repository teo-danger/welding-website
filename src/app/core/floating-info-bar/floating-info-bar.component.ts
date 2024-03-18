import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-info-bar',
  templateUrl: './floating-info-bar.component.html',
  styleUrls: ['./floating-info-bar.component.css']
})
export class FloatingInfoBarComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {}

  hideFloatingInfoBar: boolean= true;

  @HostListener('window:scroll',['$event'])
  onscroll(){
    if(window.scrollY < 110){
      this.hideFloatingInfoBar = true;
    }else if(window.scrollY > 110 && window.scrollY < 900){
      this.hideFloatingInfoBar = false;
    }else{
      this.hideFloatingInfoBar = true;
    }
  }





}
