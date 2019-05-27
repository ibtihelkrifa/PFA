import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import {Message} from '../message';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages$;
  formvalue: string;
  constructor(public chat :ChatService) { }

  ngOnInit() {
    //appends to array after each new message is added to feed source 
   this.messages$=this.chat.conversation.asObservable().scan((acc,val)=>acc.concat(val));
  }
  sendmessage()
  {
    this.chat.converse(this.formvalue);
    this.formvalue='';
  }

}
