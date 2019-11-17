import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() allUsers: any;

  roomName = 1;
  newMessage: string = '';
  texts: [];
  userId = 0;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
   setInterval(() => {this.getTexts()}, 3000);
  }

  async getTexts() {
    try {
      const texts = await this._chatService.getChatTexts(this.roomName).toPromise();
      this.texts = texts.text.map(msg => {
        const username = this.allUsers[msg.userId].name;
        return { userName: username, text: msg.text };
      })
    }
    catch (e) {
      console.error(e);
    }

  }

  async send() {
    if (this.newMessage.length > 0) {
      try {
        await this._chatService.newText(this.newMessage, this.userId, this.roomName).toPromise();
        await this.getTexts();
        this.newMessage = '';
      }
      catch (e) {
        console.error(e);
      }
    }
  }

}
