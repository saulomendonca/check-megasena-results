import { Injectable } from '@angular/core';
import { Ticket } from '../ticket/ticket';

@Injectable()
export class TicketParserService {
    convertToTicket(text:String): Ticket[] {
        var patt = /[0-9, ]{11,}/mg;
        var newTickets: Ticket[] = [];
        var result: any;
        var matches = text.replace(' ', '').match(patt);
        if(matches){
            result = matches.map(item => {
                var itemArray = item.split(',');
                var itemArrayNumber: Number[] = itemArray.map(value => parseInt(value, 10));
                return itemArrayNumber.filter( value => value <= 60 && value > 0);
            });
            result = result.filter( (item: Number[]) => item.length >= 6 && item.length <= 15);
            newTickets = result.map( (item: Number[]) => new Object({numbers: item}) );
        }
        return newTickets;
    }
}