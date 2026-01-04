import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { HelpMessage } from '../../Models/modelVM';

@Component({
  selector: 'app-helpcenter',
  standalone: true,
  imports: [],
  templateUrl: './helpcenter.component.html',
  styleUrl: './helpcenter.component.scss'
})
export class HelpcenterComponent implements OnInit {
  message: HelpMessage = new HelpMessage();
  process: boolean = false;
  status: string = "";
  constructor(private help: MessageService, private analytics: Analytics) { }

  ngOnInit() {
    logEvent(this.analytics, 'page_view', {
      page_path: "help"
    });
  }

  sendMessae() {
    this.process = true;
    this.help.sendMessage(this.message);
    this.status = "We Will Connect You Soon...";
    this.message = new HelpMessage();
  }
}
