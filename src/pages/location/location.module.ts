import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationPage } from './location';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LocationPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationPage),
    ComponentsModule
  ],
})
export class LocationPageModule {}
