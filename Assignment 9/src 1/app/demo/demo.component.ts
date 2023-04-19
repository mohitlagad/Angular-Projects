import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit
{
  resultAdd : number = 11
  resultSub : number = 21

  constructor(private arithmeticsService : ArithmeticService) {}

  ngOnInit(): void {
    this.resultAdd = this.arithmeticsService.add(11 , 21)
    this.resultSub = this.arithmeticsService.sub(11 , 21)
  }
}
