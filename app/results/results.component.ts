import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';
import { Result } from './result';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  moduleId: module.id,
  selector: 'results',
  templateUrl: 'results.component.html',
  providers: [ResultsService],
  styles: [`
    .results{
      text-align: center;
    }
    .result_id{
      width: 150px;
      display: inline-block;
      padding-right: 5px;
      text-align: right;
    }
  `]
})
export class ResultsComponent implements OnInit {
  
  results: Result[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.results = this.resultsService.getResults();
  }

}