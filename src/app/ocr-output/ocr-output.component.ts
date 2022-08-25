import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CameraService } from '../camera/camera.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ocr-output',
  templateUrl: './ocr-output.component.html',
  styleUrls: ['./ocr-output.component.scss']
})
export class OcrOutputComponent implements OnInit {

  image_id: any;
  baseUrl = environment.BASE_SERVICE_URL;
  data: any;

  constructor(private route: ActivatedRoute, private router: Router, private Service: CameraService) { }

  ngOnInit(): void {
    this.image_id = this.route.snapshot.queryParams['id'];
    this.Service.getImageByID(this.image_id).subscribe(
      (data) => {
        this.data = data;
      }
    )
  }

}
