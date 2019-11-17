import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { UsersListComponent } from './chat-container/users-list/users-list.component';
import { ChatComponent } from './chat-container/chat/chat.component';

import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    UsersListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
