import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';



// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// // import { RouterModule, Routes } from '@angular/router';
// import { IonicModule } from '@ionic/angular';
// import { IonicSelectableModule } from 'ionic-selectable';


import { MenuPage } from './menu';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    MenuPage,
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // IonicModule,
    // IonicSelectableModule,


    IonicPageModule.forChild(MenuPage),
    ComponentsModule
    // IonicSelectableModule
  ],
})
export class MenuPageModule {}
