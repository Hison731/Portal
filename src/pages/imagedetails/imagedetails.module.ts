import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagedetailsPage } from './imagedetails';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ImagedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagedetailsPage),
    ComponentsModule
  ],
})
export class ImagedetailsPageModule {}
