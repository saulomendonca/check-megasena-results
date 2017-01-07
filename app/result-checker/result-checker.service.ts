import { Injectable, Inject } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { ResultsService } from '../results/results.service';
import { Result } from '../results/result';

@Injectable()
export class ResultCheckerService {
  private results: Result[];

  checkResult(ticket:Ticket): Ticket{
    var ticketResults: any[] = [];

    ticket.sixWinningNumbers = 0;
    ticket.fiveWinningNumbers = 0;
    ticket.fourWinningNumbers = 0;

    for(var i = 0; i < this.results.length; i++) {
      var ticketResult = {};
      var result: Result = this.results[i];
      ticketResult['result'] = result;
      var winningNumbers = this.getWinningNumbers(ticket, result);
      ticketResult['winningNumbers'] = winningNumbers;

      if( winningNumbers.length == 6){
        ticket.sixWinningNumbers++;
      }
      if( winningNumbers.length == 5){
        ticket.fiveWinningNumbers++;
      }
      if( winningNumbers.length == 4){
        ticket.fourWinningNumbers ++;
      }
      ticketResults.push(ticketResult);
    }

    ticket.results = ticketResults;
    ticket.resultsWinning = ticket.results.filter( (item: any) => item.winningNumbers.length > 3);

    ticket.checked = true;


    return ticket;
  }
  
  getWinningNumbers(ticket: Ticket, result: Result){
    return this.intersection(ticket.numbers, result.ticket.numbers);
  }

  intersection(x: number[], y: number[]) {
    x.sort(this.sortNumber);
    y.sort(this.sortNumber);
    var i = 0;
    var j = 0;
    var ret: any[] = [];
    while (i < x.length && j < y.length) {
        if (x[i] < y[j]) i++;
        else if (y[j] < x[i]) j++;
        else {
            ret.push(x[i]);
            i++, j++;
        }
    }
    return ret;
  }
  sortNumber(a:number,b:number) {
      return a - b;
  }
  
  constructor(_resultService: ResultsService) {
    this.results = _resultService.getResults();
  }

}