import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SplashScreenModule } from './shared/widgets/splash-screen/splash-screen.module';
import { AngularMaterialModule } from './shared/uikit/angular-material/angular-material.module';
import { SplashScreenService } from './shared/widgets/splash-screen/splash-screen.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    SplashScreenModule,
    AngularMaterialModule
  ],
  providers: [SplashScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
