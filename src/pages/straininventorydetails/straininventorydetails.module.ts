import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StraininventorydetailsPage } from './straininventorydetails';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    StraininventorydetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StraininventorydetailsPage),
    ComponentsModule
  ],
  exports: [
    StraininventorydetailsPage
  ]
})
export class StraininventorydetailsPageModule {}
