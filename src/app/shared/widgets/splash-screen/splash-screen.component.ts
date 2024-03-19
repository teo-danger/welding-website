import { Component, Input, OnInit } from '@angular/core';
import { SplashScreenService } from './splash-screen.service';
// import { SplashScreenStateService } from './splash-screen-state.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
})
export class SplashScreenComponent implements OnInit{

  constructor(private splashService: SplashScreenService) {}

  showSplash: boolean;
  opacityChange = 1;
  splashTransition: string | undefined;
  readonly ANIMATION_DURATION = 1;




  checkSplashSession(){
    if(this.splashService.getSessionItem() == "active"){
      this.showSplash = true;
    } else {
      this.showSplash = false;
    }
  }


  private hideSplashAnimation() {
   this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
   this.opacityChange = 0;
  }


  ngOnInit(): void {
    this.checkSplashSession();
    setTimeout(() => {
      this.hideSplashAnimation();
    }, 1000);
    this.splashService.setSplashInactive();
  }


}
