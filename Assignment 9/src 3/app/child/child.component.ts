import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  constructor(private numberService : NumberService , private stringService : StringService) {}

  ngOnInit(): void {
    const num = 7
    const isPrime = this.numberService.chkPrime(num)
    console.log(num + ' is Prime: ' +isPrime) 

    const str = "Shree Ganesh ! "
    const count = this.stringService.countCapital(str)
    console.log('Number ofcapital letters in ' +str  +count )


  }
}
