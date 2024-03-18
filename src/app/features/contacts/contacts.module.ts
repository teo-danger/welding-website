import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { AngularMaterialModule } from 'src/app/shared/uikit/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    UikitModule,
    AngularMaterialModule
  ]
})
export class ContactsModule { }
