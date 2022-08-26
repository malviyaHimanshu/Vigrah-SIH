import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KosaService } from '../kosa/kosa.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inscription-detail',
  templateUrl: './inscription-detail.component.html',
  styleUrls: ['./inscription-detail.component.scss']
})
export class InscriptionDetailComponent implements OnInit {

  inscriptionDetail: any;
  baseURL = environment.BASE_SERVICE_URL;

  constructor(private route: ActivatedRoute, private Service: KosaService) { }

  ngOnInit(): void {
    let inscription_id = this.route.snapshot.queryParams['uid'];
    this.getInscriptionDetails(inscription_id);
  }

  getInscriptionDetails(id: any) {
    this.Service.getInscriptionDetails(id).subscribe(
      (data) => {
        this.inscriptionDetail = data[0];
        console.log("this is data", this.inscriptionDetail);
      }
    )
  }

}
