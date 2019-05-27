import { Injectable } from '@angular/core';
import {ApiAiClient} from 'api-ai-javascript';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Message} from './message';
@Injectable()

export class ChatService {
 readonly token= environment.dialogflow.angularBot;
 readonly client= new ApiAiClient({accessToken: this.token});
 conversation= new BehaviorSubject<Message[]>([]);//array of messages 
  constructor() { }
  //add message to source
  update(msg:Message)
  {
    this.conversation.next([msg]);}
  
 
  //can make us to send and receive messages via DialogFlow
  converse(msg: String)
  {
     const userMessage= new Message(msg,'user');//it converts the user message to a an object Message
      this.update(userMessage);
      return this.client.textRequest(msg).then(res=>{
        const speech=res.result.fulfillment.speech;
        const bothMessage = new Message(speech,'bot');
        this.update(bothMessage);
      })
  }


}
