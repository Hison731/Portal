import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanycouponsPage } from './companycoupons';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    CompanycouponsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanycouponsPage),
    ComponentsModule
  ],
})
export class CompanycouponsPageModule {}
