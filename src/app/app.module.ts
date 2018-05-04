import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PostcodeComponent } from './postcode/postcode.component';
import { PostcodedetailComponent } from './postcodedetail/postcodedetail.component';
import { HttpModule } from '@angular/http';

import { PostcodeService } from './shared/postcode.service';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PostcodeComponent,
    PostcodedetailComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdeqvttjAW2QRWEBasR6pz527Wuv5jdWU'
    }),
    HttpModule
  ],
  providers: [PostcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
