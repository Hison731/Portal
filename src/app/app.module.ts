import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicSelectableModule } from 'ionic-selectable';
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

// test modal
// import { SampleModalPage } from '../pages/sample-modal/sample-modal';

@NgModule({
  declarations: [
    MyApp
    // SampleModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicImageViewerModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicSelectableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // SampleModalPage
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
