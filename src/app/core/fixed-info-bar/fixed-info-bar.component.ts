import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import {faClock, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fixed-info-bar',
  templateUrl: './fixed-info-bar.component.html',
  styleUrls: ['./fixed-info-bar.component.css']
})
export class FixedInfoBarComponent implements OnInit {

  phoneIcon = faPhone;
  locationIcon = faLocationDot;
  mailIcon = faEnvelope;
  clockIcon = faClock;


  contacts = {
    phoneNumber: "+39 0331-908288",
    email : "weldingCompany@gmail.com",
    locationLink: "https://www.google.it/maps/place/Tennessee+City,+Tennessee+37055,+Stati+Uniti/@36.0931149,-87.5250369,15z/data=!3m1!4b1!4m6!3m5!1s0x8864b2eed30dff07:0x87dc021161ecba96!8m2!3d36.0931158!4d-87.5147372!16s%2Fg%2F11bwqrcyst?entry=ttu"
  }

  pageScrolling: boolean = false;
  hideInfoBar: boolean = false;
  barDescriptionHidden: boolean = false;
  timetableHidden: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver){}


  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        if(state.matches){
          this.barDescriptionHidden = true;
        }else{
          this.barDescriptionHidden = false;
        }
      });
  }


  // location: string = `Welding Street 7A
  //                 Tennessee, USA`;
  // clock: string = `Mon-Fri: 8:00-18:00
  //                     Sat: 9:00-12:00`;




  @HostListener('window:scroll',['$event'])
  onscroll(){
    if(window.scrollY < 100){
      this.pageScrolling = false;
      this.hideInfoBar = false;
    }else if(window.scrollY > 110 && window.scrollY < 900){
      this.pageScrolling = true;
      this.hideInfoBar = false;
    }else{
      this.pageScrolling = true;
      this.hideInfoBar = false;
    }
  }


  showTimetable = () => {
    this.timetableHidden = !this.timetableHidden;
  }







}
