import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CameraService } from './camera.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  // @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;
  webcamImage: WebcamImage | undefined;
  images: any = []
  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  constructor(private router: Router, private Service: CameraService) { }


  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
    this.router.navigateByUrl("/abhinana");
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    // this.getPicture.emit(webcamImage);
    this.webcamImage = webcamImage;
    this.images[0] = this.webcamImage;
    this.showWebcam = false;
  }

  retake() {
    this.webcamImage = undefined;
    this.images = [];
    this.showWebcam = true;
  }

  postPhoto() {
    console.log("this is the image : ", this.images[0]);
    let tempImage = this.images[0];
    const arr = tempImage.imageAsDataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file: File = new File([u8arr], 'scannedimage.jpeg', { type: tempImage._mimeType });
    this.images[0] = file;
    console.log("this is the image : ", this.images[0]);

    const formData = new FormData();
    if(this.images.length) {
      for(let i=0; i<this.images.length; i++) {
        formData.append('image[]', this.images[i]);
      }
    }
    this.Service.saveImageToModel(formData).subscribe(
      (data) => {
        console.log("Data sent successfully", data);
        this.router.navigateByUrl(`/output?id=${data}`);
      }
    )
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

}
