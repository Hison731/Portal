import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrainsPage } from './strains';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    StrainsPage,
  ],
  imports: [
    IonicPageModule.forChild(StrainsPage),
    ComponentsModule
  ],
})
export class StrainsPageModule {}
