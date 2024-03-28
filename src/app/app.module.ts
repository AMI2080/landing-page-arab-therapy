import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import {
  HomeSectionOneComponent,
  HomeSectionThreeComponent,
  HomeSectionTwoComponent,
} from './components/home/sections';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
