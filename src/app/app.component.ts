import { Component } from '@angular/core';
import {CustomerSeviceService} from '../app/Services/customer-sevice.service'
import{user} from  '../app/Models/userdata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  user:user={
    id:1,
    name:'test',
    dateTime:new Date()
  };
  constructor(private userData:CustomerSeviceService){
    // this.userData.Customer().subscribe((data)=>{
    //   console.warn(data);
    //   // this.user = data;
    // })
  }
}
