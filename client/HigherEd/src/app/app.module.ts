import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectureTheatreComponent } from './lecture-theatre/lecture-theatre.component';
import { ChatComponent } from './chat/chat.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureTheatreComponent,
    ChatComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
