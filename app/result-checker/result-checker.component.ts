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
  ticketsChecked: number = 0;
  sixWinningNumbers: number = 0;
  fiveWinningNumbers: number = 0;
  fourWinningNumbers: number = 0;
  public checking: boolean = false;

  constructor(private _resultCheckerService: ResultCheckerService) {

  }

  handleTicketsUpdated(tickets: any) {
    this.tickets = tickets;
    this.updateData();
    this.checkTickets();
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