import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StraindetailPage } from './straindetail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    StraindetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StraindetailPage),
    ComponentsModule
  ],
})
export class StraindetailPageModule {}
