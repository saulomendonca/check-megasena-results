import { Component, Input } from '@angular/core';
import { Ticket } from './ticket';


@Component({
  moduleId: module.id,
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styles: [`
    .result-number {
        padding-top: 6px;
        border-radius: 10rem;
        width: 40px;
        height: 40px;
        font-size: 25px;
        background-color: #818a91;
        display: inline-block;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        vertical-align: baseline;
        text-align: center;
        margin: 3px;
    }
    
    .winning {
        background-color: #5cb85c;
    }
  `]
})
export class TicketComponent {
    @Input() ticket: Ticket;
}
