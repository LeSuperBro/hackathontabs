import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular//common/http";

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { IonicStorageModule } from '@ionic/storage';

// geolocation and native-geocoder
import { Geolocation } from '@ionic-native/geolocation/ngx';

//Pour partager les hackathons
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

// //Pour ajouter à l'agenda
// import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })],
  providers: [
    SocialSharing,
    Geolocation,
    // Calendar,
    {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}