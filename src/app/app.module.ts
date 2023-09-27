import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
