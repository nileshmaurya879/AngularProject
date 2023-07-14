import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerSeviceService {

  constructor(private http: HttpClient) { 

  }
  url="https://localhost:7218/WeatherForecast";
  Customer(){
    return this.http.get(this.url)
  }
}
