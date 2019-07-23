import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
// modal
import { FollowerModalPage } from '../pages/follower-modal/follower-modal';

@NgModule({
  declarations: [
    MyApp,
    FollowerModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicImageViewerModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FollowerModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    DataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Camera
  ]
})
export class AppModule {}
