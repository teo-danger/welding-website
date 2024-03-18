import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.css']
})
export class ResponsiveNavbarComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver){}


  faBars = faBars;
  faX = faXmark;

  mobileMenu : boolean = false;

  pageScrolling: boolean = false;
  logoResizing: boolean = false;



  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        if(state.matches){
          this.mobileMenu = true;
        }else{
          this.mobileMenu = false;
        }
      });
  }



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


  openMobileMenu(value: boolean){
    this.mobileMenu = value;
  }
}
