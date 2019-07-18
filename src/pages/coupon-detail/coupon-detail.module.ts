import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponDetailPage } from './coupon-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CouponDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponDetailPage),
    ComponentsModule
  ],
})
export class CouponDetailPageModule {}
