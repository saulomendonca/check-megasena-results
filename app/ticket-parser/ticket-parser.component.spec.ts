/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TicketParserComponent } from './ticket-parser.component';

describe('TicketParserComponent', () => {
  let component: TicketParserComponent;
  let fixture: ComponentFixture<TicketParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});