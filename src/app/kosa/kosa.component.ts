import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kosa',
  templateUrl: './kosa.component.html',
  styleUrls: ['./kosa.component.scss']
})
export class KosaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
