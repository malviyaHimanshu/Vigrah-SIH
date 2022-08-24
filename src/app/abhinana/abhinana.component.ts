import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera/camera.service';

@Component({
  selector: 'app-abhinana',
  templateUrl: './abhinana.component.html',
  styleUrls: ['./abhinana.component.scss']
})
export class AbhinanaComponent implements OnInit {

  selectedFile: any;

  constructor(private Service: CameraService) { }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log("this is the image : ", this.selectedFile);
    let incomingData = {
      image: this.selectedFile,
    }
    this.Service.saveImageToModel(incomingData).subscribe(
      (data) => {
        console.log("Image sent successfully", data);
      }
    )
  }

  // onUpload() {
  //   console.log("this is the image : ", this.selectedFile);
  // }

}
