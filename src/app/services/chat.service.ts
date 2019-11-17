import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getChatUsers(chatName: any): any {
    return this.http.get(`http://localhost:3001/rooms/${chatName}/users`,
      {
        headers: this.headers,
      });
  }

  getAllUsers(): any {
    return this.http.get(`http://localhost:3001/users`,
      {
        headers: this.headers,
      });
  }

  getChatTexts(chatName: any): any {
    return this.http.get(`http://localhost:3001/rooms/${chatName}/text`,
    {
      headers: this.headers,
    });
  }

  newText(text: string, userId: number, chatName: any): any {
    return this.http.post(`http://localhost:3001/rooms/${chatName}/text`,
      JSON.stringify({text: text, userId: userId}),
      {
        responseType: 'text',
        headers: this.headers
      });
  }
}
