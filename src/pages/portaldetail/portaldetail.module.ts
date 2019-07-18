import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortaldetailPage } from './portaldetail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PortaldetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PortaldetailPage),
    PortaldetailPage
  ],
})
export class PortaldetailPageModule {}
