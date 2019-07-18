import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrainsubdetailPage } from './strainsubdetail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    StrainsubdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StrainsubdetailPage),
    ComponentsModule
  ],
})
export class StrainsubdetailPageModule {}
