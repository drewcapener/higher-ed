import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectureTheatreComponent } from './lecture-theatre/lecture-theatre.component';
import { ChatComponent } from './chat/chat.component';
import { ScreenComponent } from './screen/screen.component';
import { ThreadCardComponent } from './thread-card/thread-card.component';
import { SearchChatComponent } from './search-chat/search-chat.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LectureTheatreComponent,
    ChatComponent,
    ScreenComponent,
    ThreadCardComponent,
    SearchChatComponent,
    NewThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
