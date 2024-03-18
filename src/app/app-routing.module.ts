import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'contacts', loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'portfolio', loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) },
  { path: 'splash-screen', loadChildren: () => import('./shared/widgets/splash-screen/splash-screen.module').then(m => m.SplashScreenModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
