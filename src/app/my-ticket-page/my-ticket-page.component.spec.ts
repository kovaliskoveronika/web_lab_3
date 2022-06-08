import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTicketPageComponent } from './my-ticket-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('MyTicketPageComponent', () => {
  let component: MyTicketPageComponent;
  let fixture: ComponentFixture<MyTicketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ MyTicketPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
