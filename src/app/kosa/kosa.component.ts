import { Component, OnInit } from '@angular/core';
import { KosaService } from './kosa.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kosa',
  templateUrl: './kosa.component.html',
  styleUrls: ['./kosa.component.scss']
})
export class KosaComponent implements OnInit {

  inscriptionData: any;
  baseUrl = environment.BASE_SERVICE_URL;

  constructor(private Service: KosaService, private router: Router) { }

  ngOnInit(): void {
    this.getInscriptions();
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  getInscriptions() {
    this.Service.getInscriptions().subscribe(
      (data) => {
        console.log("this is data", data);
        this.inscriptionData = data;
      }
    )
  }

  goToInscriptionDetails(id: any) {
    this.router.navigateByUrl(`inscriptionDetails?id=${id}`);
  }

}
