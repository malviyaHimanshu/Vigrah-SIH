import { Component, OnInit } from '@angular/core';
import { AksarantaraService } from './aksarantara.service';

@Component({
  selector: 'app-aksarantara',
  templateUrl: './aksarantara.component.html',
  styleUrls: ['./aksarantara.component.scss']
})
export class AksarantaraComponent implements OnInit {

  outputText: string = '';
  constructor(private Service: AksarantaraService) { }

  ngOnInit(): void {
  }

  onSubmit(result: any) {
    this.Service.getTransliteration(result.inputText).subscribe(
      (data) => {
        this.outputText = data;
      }, (error) => {
        this.outputText = "SOME ERROR OCCURED!"
      }
    )

  }

}
