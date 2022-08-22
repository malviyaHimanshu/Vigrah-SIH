import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AksarantaraService {

  constructor(private http: HttpClient) { }

  public getTransliteration(input: any) {
    return this.http.get(`http://aksharamukha-plugin.appspot.com/api/public?target=IAST&text=${input}`, {responseType: 'text'});
  }
}
