import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as anime from 'animejs';
import { SplashScreenService } from './shared/widgets/splash-screen/splash-screen.service';
import { Subscription, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private splashService: SplashScreenService){
  }


  subscription: Subscription;
  title = 'Our Welding Company';

  ngOnInit(): void {
    AOS.init();
    this.checkSplashSessionItem();

  }


  checkSplashSessionItem(){
    if(this.splashService.getSessionItem() == null){
      this.splashService.setSplashActive();
    }else{
      this.splashService.deleteSessionItem()
    }
  }


}
