import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyprofilePage } from './companyprofile';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    CompanyprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyprofilePage),
    ComponentsModule
  ],
})
export class CompanyprofilePageModule {}
