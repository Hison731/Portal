import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortalprofilemenuPage } from './portalprofilemenu';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PortalprofilemenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PortalprofilemenuPage),
    ComponentsModule
  ],
})
export class PortalprofilemenuPageModule {}
