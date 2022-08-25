import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera/camera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abhinana',
  templateUrl: './abhinana.component.html',
  styleUrls: ['./abhinana.component.scss']
})
export class AbhinanaComponent implements OnInit {

  selectedFile: any;
  images: any = [];

  constructor(private Service: CameraService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.images[0] = this.selectedFile;
    console.log("this is the image : ", this.selectedFile);
    const formData = new FormData();
    if(this.images.length) {
      for(let i=0; i<this.images.length; i++) {
        formData.append('image[]', this.images[i]);
      }
    }
    this.Service.saveImageToModel(formData).subscribe(
      (data) => {
        console.log("Image sent successfully", data);
        this.router.navigateByUrl(`/output?id=${data}`);
      }
    )
  }

  // onUpload() {
  //   console.log("this is the image : ", this.selectedFile);
  // }

}
