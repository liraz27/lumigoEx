import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() allUsers: any;
  users = [];
  roomName = 1;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    const usersIdsInRoom = await this._chatService.getChatUsers(this.roomName).toPromise();
    this.users = usersIdsInRoom.users.map(userId => {
      return this.allUsers[userId].name;
    });
  }

}
