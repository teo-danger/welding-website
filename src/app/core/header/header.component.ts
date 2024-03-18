import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {}

  pageScrolling: boolean = false;
  logoResizing: boolean = false;

  @HostListener('window:scroll',['$event'])
  onscroll(){
    if(window.scrollY > 100){
      this.pageScrolling = true;
      this.logoResizing = true;
    }else{
      this.pageScrolling = false;
      this.logoResizing = false;
    }
  }





}
