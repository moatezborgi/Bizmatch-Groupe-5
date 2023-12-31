import {AfterViewChecked, Component, ElementRef, OnInit} from '@angular/core';
import {WebSocketServiceService} from "../Services/web-socket-service.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
  import {RoomServiceService} from "../Services/room-service.service";
import {Chat} from "../Models/Chat";
import {Messaggio} from "../Models/Messaggio";
 @Component({
  selector: 'app-chat-module',
  templateUrl: './chat-module.component.html',
  styleUrls: ['./chat-module.component.css']
})
export class ChatModuleComponent implements OnInit ,AfterViewChecked{

   message: string = ''; // Initialize with an empty string
   currentusername=localStorage.getItem("emailadress");
   currentuserlnom=localStorage.getItem("lname");
   currentuserfnom=localStorage.getItem("fname");
   currentuserrole=localStorage.getItem("role");
   currentStaticUsername: string = 'yassine';
   chats: Chat[] = [];
   Messages: Messaggio[] = [];
   currentSelectedChat: Chat | null = null; // Track the selected chat


   constructor(
     private route: ActivatedRoute,
     private webSocketService: WebSocketServiceService,
     private roomService: RoomServiceService,
     private el: ElementRef
   ) {}

   ngOnInit() {
     /*this.webSocketService.connect().subscribe(message => {
       let receive = JSON.parse(JSON.stringify(message));
       console.log("connected");
     });*/

     this.roomService.getChats(this.currentStaticUsername).subscribe(
       (data) => {
         this.chats = data.body;
       },
       (error) => {
         console.error('Error fetching chats:', error);
       })

     if (this.chats.length > 0) {
       this.loadMessagesForChat(this.chats[0]);
     }
   }

   ngAfterViewChecked(): void {

   }

   addMessage(message: Messaggio) {
     this.Messages.push(message);
   }
   sendMessage(): void {

     if (this.message.trim() !== '') {
       console.log(this.currentSelectedChat!.chat_id)
       let msg= new Messaggio();
       msg.sender=this.currentStaticUsername
       msg.chatId=<number>this.currentSelectedChat!.chat_id
       msg.content=this.message
       // Send the message using your WebSocket service
       this.webSocketService.sendMessage(msg);
       this.addMessage(msg);
       console.log("sent")
       // Optionally, clear the input field after sending the message
       this.message = '';
     }
   }

   // Function to select a chat
   selectChat(chat: Chat): void {
     this.currentSelectedChat = chat;
     console.log(chat.name)
     this.loadMessagesForChat(chat);

   }

   // Function to load and display messages for the selected chat
   loadMessagesForChat(chat: Chat): void {
     this.roomService.getMessages(chat.name.toString()).subscribe(
       (data) => {
         this.Messages = data.body;
         console.log(this.Messages.length)
         this.scrollChatToBottom();

       },
       (error) => {
         console.error('Error fetching messages:', error);
       }
     );
   }

   scrollChatToBottom(): void {
     setTimeout(() => {
       const chatBox = this.el.nativeElement.querySelector('.chat-box');
       chatBox.scrollTop = chatBox.scrollHeight;
     }, 0);
   }
 }
