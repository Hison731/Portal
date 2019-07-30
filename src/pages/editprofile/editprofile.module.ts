import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditprofilePage } from './editprofile';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [  
    EditprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditprofilePage),
    ComponentsModule
  ],
})
export class EditprofilePageModule {}
