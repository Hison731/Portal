import { NgModule } from '@angular/core';
import { PortalHeaderComponent } from './portal-header/portal-header';
import { PortalFooterComponent } from './portal-footer/portal-footer';
import { AuthFabComponent } from './auth-fab/auth-fab';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StrainSearchbarComponent } from './strain-searchbar/strain-searchbar';

@NgModule({
	declarations: [PortalHeaderComponent,
    PortalFooterComponent,
    AuthFabComponent,
    StrainSearchbarComponent],
	imports: [IonicModule],
	exports: [PortalHeaderComponent,
    PortalFooterComponent,
    AuthFabComponent,
    StrainSearchbarComponent]
})
export class ComponentsModule {}
