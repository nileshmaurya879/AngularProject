import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {LineNumberFormate, LineNumberFormateSectionType} from '../Models/line-number-formate.model';

@Injectable({
  providedIn: 'root'
})
export class LinearFormateService {

  url='https://localhost:44302/api/'

  constructor(private http:HttpClient) { }

  getLineNumberFormate() : Observable<LineNumberFormate[]>{
    return this.http.get<LineNumberFormate[]>(this.url + 'LineNumberFormate/GetLineNumberFormatTemplates?instanceId=69D1E0B6-2EDC-44AE-B535-016D40A8CFF8');
  }

  getLineNumberFormateSectionType() : Observable<LineNumberFormateSectionType[]>{
    return this.http.get<LineNumberFormateSectionType[]>(this.url + 'LineNumberFormateSectionType/GetLineFormateSectionType');
  }

}
