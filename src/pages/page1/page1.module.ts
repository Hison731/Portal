import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'; 
import { Page1 } from './Page1';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [
    Page1,
  ],
  imports: [
    IonicPageModule.forChild(Page1),
    ComponentsModule
  ],
})
export class Page1Module {}
