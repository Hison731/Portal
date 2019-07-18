import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponsPage } from './coupons';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CouponsPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponsPage),
    ComponentsModule
  ]

})
export class CouponsPageModule {}
