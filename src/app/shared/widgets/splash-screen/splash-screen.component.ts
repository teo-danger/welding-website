import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from './splash-screen-state.service';
import { animate, style, transition, trigger } from '@angular/animations';

const enter = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in')
])
const fadeIn = trigger("fadeIn", [enter])



@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    fadeIn
  ],

})
export class SplashScreenComponent implements OnInit{

  constructor(private splashScreenStateService: SplashScreenStateService) {
      // it will be null if it doesn't exist
       const isShowSplash = sessionStorage.getItem('isShowSplash');
       if (isShowSplash) {

       } else {
           // show splash
           this.showSplash = true;
       }
       sessionStorage.setItem(('isShowSplash'), JSON.stringify(false));
  }



  // First access the splash is visible
  showSplash: boolean = true;
  // The screen starts with the maximum opacity
  opacityChange = 1;

  splashTransition: string | undefined;

  readonly ANIMATION_DURATION = 1;

private hideSplashAnimation() {
   // Setting the transition
   this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
   this.opacityChange = 0;

   setTimeout(() => {
      // After the transition is ended the showSplash will be hided
      this.showSplash = !this.showSplash;
   }, 1000);
}

ngOnInit(): void {
  // Somewhere the stop method has been invoked
  this.splashScreenStateService.subscribe(() => {
     this.hideSplashAnimation();
  });

  setTimeout(() => {
    this.splashScreenStateService.stop();
  }, 1000);

}





}
