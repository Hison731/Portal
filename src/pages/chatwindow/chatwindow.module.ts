import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatwindowPage } from './chatwindow';
import { EmojiPickerComponentModule } from '../../components/emoji-picker/emoji-picker.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChatwindowPage,
  ],
  imports: [
    EmojiPickerComponentModule,
    IonicPageModule.forChild(ChatwindowPage),
    ComponentsModule
  ],
})
export class ChatwindowPageModule {}
