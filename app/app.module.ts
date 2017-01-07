import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { TicketComponent } from './ticket/ticket.component';
import { ResultCheckerComponent } from './result-checker/result-checker.component';
import { TicketParserComponent } from './ticket-parser/ticket-parser.component';
import { ResultsSummaryComponent } from './results-summary/results-summary.component';
import { ResultsService } from './results/results.service';

@NgModule({
  declarations: [ 
    AppComponent,
    ResultsComponent,
    TicketComponent,
    ResultCheckerComponent,
    TicketParserComponent,
    ResultsSummaryComponent
  ],
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ResultsService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
