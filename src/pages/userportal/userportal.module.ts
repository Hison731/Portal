import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserportalPage } from './userportal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UserportalPage,
  ],
  imports: [
    IonicPageModule.forChild(UserportalPage),
    ComponentsModule
  ],
})
export class UserportalPageModule {}
