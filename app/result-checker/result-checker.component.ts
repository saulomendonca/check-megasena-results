import { ResultCheckerService } from './result-checker.service';
import { Component } from '@angular/core';
import { Ticket } from '../ticket/ticket';

@Component({
  moduleId: module.id,
  selector: 'app-result-checker',
  providers: [ResultCheckerService],
  templateUrl: './result-checker.component.html'
})
export class ResultCheckerComponent {

  tickets: Ticket[] = [];
  ticketsFiltered: Ticket[] = [];
  ticketsChecked: number = 0;
  sixWinningNumbers: number = 0;
  fiveWinningNumbers: number = 0;
  fourWinningNumbers: number = 0;
  checking: boolean = false;

  showAll: boolean = true;
  showSixWinningNumbers: boolean = true;
  showFiveWinningNumbers: boolean = true;
  showFourWinningNumbers: boolean = true;

  




  constructor(private _resultCheckerService: ResultCheckerService) {

  }

  handleTicketsUpdated(tickets: any) {
    this.tickets = tickets;
    this.updateData();
    this.checkTickets();
    this.filterTickets();
  }

  handleFilterChanged(result: any) {
    this.showAll = result.showAll;
    this.showSixWinningNumbers = result.showSixWinningNumbers;
    this.showFiveWinningNumbers = result.showFiveWinningNumbers;
    this.showFourWinningNumbers = result.showFourWinningNumbers;  
    this.filterTickets()
  }

  filterTickets(){
    this.ticketsFiltered = this.tickets.filter( (ticket: Ticket) => this.showTicket(ticket));
  }

  showTicket(ticket: Ticket){
    if(this.showAll){
      return true
    }
    
    if(this.showSixWinningNumbers && ticket.sixWinningNumbers > 0){
      return true
    }
    if(this.showFiveWinningNumbers && ticket.fiveWinningNumbers > 0){
      return true
    }
    if(this.showFourWinningNumbers && ticket.fourWinningNumbers > 0){
      return true
    }
    return false;
  }

  updateData(){
    this.ticketsChecked = this.tickets.filter(item => item.checked).length;
    this.sixWinningNumbers = this.tickets.filter(item => item.sixWinningNumbers > 0).length;
    this.fiveWinningNumbers = this.tickets.filter(item => item.fiveWinningNumbers > 0).length;
    this.fourWinningNumbers = this.tickets.filter(item => item.fourWinningNumbers > 0).length;
  }

  checkTickets(){
    this.checking = true;
    this.ticketsChecked = 2;
    for(var i = 0; i < this.tickets.length; i++) {
      this.tickets[i] = this._resultCheckerService.checkResult(this.tickets[i]);
      this.ticketsChecked++;
    }
    this.updateData();
  }

}