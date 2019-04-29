import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private _http: HttpClient) { }
  getTranslation(word): Observable<string>{
    return this._http.get<string>("https://translator-133.herokuapp.com/JSON/" + word.toLowerCase());
  }

}