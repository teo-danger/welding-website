import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { SplashScreenComponent } from './splash-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    SplashScreenRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    SplashScreenComponent
  ],
})
export class SplashScreenModule { }
