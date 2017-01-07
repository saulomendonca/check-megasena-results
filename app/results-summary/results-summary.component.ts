import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'results-summary',
  templateUrl: './results-summary.component.html'
})
export class ResultsSummaryComponent {
  @Output() filterChanged = new EventEmitter();


  inProgress: boolean = false;
  percent: number = 0;
  showAll: boolean = true;
  showSixWinningNumbers: boolean = true;
  showFiveWinningNumbers: boolean = true;
  showFourWinningNumbers: boolean = true;

  private _numberTickets: number = 0;
  private _numberTicketsCompleted: number = 0;


  @Input()
  set numberTickets(value: number) {
    this._numberTickets = value;
    this.changeProgress();
  }
  get numberTickets(): number { return this._numberTickets; }
  

  @Input()
  set numberTicketsCompleted(value: number) {
    this._numberTicketsCompleted = value;
    this.changeProgress();
  }
  get numberTicketsCompleted(): number { return this._numberTicketsCompleted; }

  @Input() sixWinningNumbers: number = 10;
  @Input() fiveWinningNumbers: number = 10;
  @Input() fourWinningNumbers: number = 10;


  changeProgress(){
    if(this.numberTickets == this.numberTicketsCompleted){
      this.percent = 100;
    }else if(this.numberTicketsCompleted == 0){
      this.percent = 0;
    }else{
      this.percent = (this.numberTickets / this.numberTicketsCompleted) * 100;
    }

    this.inProgress = (this.percent < 100 );
  }

  changeShowAll(){
    if(this.showAll){
      this.showSixWinningNumbers = true;
      this.showFiveWinningNumbers = true;
      this.showFourWinningNumbers = true;
    }
    this.emitFilterChanged();
  }

  changeShowSixWinningNumbers(){
    if(!this.showSixWinningNumbers){
      this.showAll = false;
    }
    this.emitFilterChanged();
  }

  changeShowFiveWinningNumbers(){
    if(!this.showFiveWinningNumbers){
    this.showAll = false;
    }
    this.emitFilterChanged();
  }

  changeShowFourWinningNumbers(){
    if(!this.showFourWinningNumbers){
    this.showAll = false;
    }
    this.emitFilterChanged();
  }

  emitFilterChanged(){
    this.filterChanged.emit({
        showAll: this.showAll,
        showSixWinningNumbers: this.showSixWinningNumbers,
        showFiveWinningNumbers: this.showFiveWinningNumbers,
        showFourWinningNumbers: this.showFourWinningNumbers
      });
  }



}