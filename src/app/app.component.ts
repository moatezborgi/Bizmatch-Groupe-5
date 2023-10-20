import {Component, OnInit} from '@angular/core';
import {Client} from "@stomp/stompjs";
import {WebSocketServiceService} from "./Services/web-socket-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BizMatch';

  ngOnInit(): void {
    this.webSocketService.connect().subscribe(message => {
      let receive = JSON.parse(JSON.stringify(message));
      if (receive.type == 'alert') {
        console.log(receive.message+receive.form)
      }
    });
  }
  constructor(private webSocketService: WebSocketServiceService) { }


}
