import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private http: HttpClient) { }

  public saveImageToModel(data: any) {
    return this.http.post<any>(`${environment.BASE_SERVICE_URL}/ocr_api/send_image`, data);
  }

  public getImageByID(id: any) {
    return this.http.get<any>(`${environment.BASE_SERVICE_URL}/ocr_api/get_image?id=${id}`);
  }
}
