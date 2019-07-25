import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserportalsPage } from './userportals';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    UserportalsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserportalsPage),
    ComponentsModule
  ],
})
export class UserportalsPageModule {}
