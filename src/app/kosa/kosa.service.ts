import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KosaService {

  constructor(private http: HttpClient) { }

  public getInscriptions() {
    return this.http.get<any>(`${environment.BASE_SERVICE_URL}/main_api/get_inscriptions`);
  }

  public getInscriptionDetails(id: any) {
    return this.http.get<any>(`${environment.BASE_SERVICE_URL}/main_api/get_inscription_details?uid=${id}`)
  }
}
