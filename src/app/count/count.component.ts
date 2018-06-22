import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  coinTypes: number[] = [200, 100, 50, 20, 10, 5, 1];
  coinTotal = 0;

  constructor() {
  }

  ngOnInit() {
  }

  add(coinType: number) {
    this.coinTotal = this.coinTotal + coinType;
  }

  substract(coinType: number) {
    if (this.coinTotal > 0) {
      this.coinTotal = this.coinTotal - coinType;
    }
  }

}
