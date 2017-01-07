import { Component, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Ticket } from '../ticket/ticket';
import { TicketParserService } from './ticket-parser.service';

@Component({
  moduleId: module.id,
  selector: 'tickets-parser',
  templateUrl: './ticket-parser.component.html',
  providers: [TicketParserService]
})
export class TicketParserComponent {
  @Output() ticketsUpdated = new EventEmitter();

  public form = this.fb.group({
    numbers: ["", Validators.required]
  });
  public tickets: Ticket[];

  constructor(private _ticketParserService: TicketParserService, public fb: FormBuilder) {
    this.form.get('numbers').valueChanges.subscribe(function (value: any) {

      this.tickets = _ticketParserService.convertToTicket(value);
      this.ticketsUpdated.emit(this.tickets);
      
    }.bind(this));

  }
}