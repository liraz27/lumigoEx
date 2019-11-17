import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

  allUsers = {};

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  async getAllUsers() {
     const users = await this._chatService.getAllUsers().toPromise();
     this.allUsers = _.keyBy(users, 'id');
  }



}
