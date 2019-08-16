import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { ComponentsModule } from '../../components/components.module'; 
import { TooltipsModule } from 'ionic-tooltips';
@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    ComponentsModule,
    TooltipsModule.forRoot()
  ],
})
export class MainPageModule {}
