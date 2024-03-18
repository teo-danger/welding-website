import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenModule } from './shared/widgets/splash-screen/splash-screen.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SplashScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
