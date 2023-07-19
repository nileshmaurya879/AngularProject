import { Component } from '@angular/core';
import { LineNumberFormate, linearFormateSection,LineNumberFormateSectionType } from 'src/app/Models/line-number-formate.model';
import {LinearFormateService} from 'src/app/Services/linear-formate.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LineNumberFormateDetailsComponent} from 'src/app/LineNumberFormate/line-number-formate-details/line-number-formate-details.component'
@Component({
  selector: 'app-line-number-formate',
  templateUrl: './line-number-formate.component.html',
  styleUrls: ['./line-number-formate.component.css']
})
export class LineNumberFormateComponent{

   lineNumberformateData:LineNumberFormate[];
   DefaultlineNumberformateData:LineNumberFormate[];
   selectedLineFormate:LineNumberFormate;
   testUser:any = 'hello'
   parentData: any = 'my testing';
   isModel:boolean= false;
   test:any;
    constructor(private linearFormateService:LinearFormateService, private mgbModel: NgbModal){
      
      this.linearFormateService.getLineNumberFormate().subscribe((data)=>{
          this.lineNumberformateData = data;
          this.DefaultlineNumberformateData = data;
          console.log("**********************", this.lineNumberformateData);
      })
    }

    getLineNumberFormateField(selectLineFormate: LineNumberFormate ){
      this.selectedLineFormate = selectLineFormate;
      console.log("*********************************************************selecte formate",this.selectedLineFormate,);
    }

    addLineNumberFormate(){
      console.log("Added new form group control");
      this.isModel= true;
      const modelRef= this.mgbModel.open(LineNumberFormateDetailsComponent,{size:"xl"})
      modelRef.componentInstance.testdata = this.lineNumberformateData;
      modelRef.componentInstance.isModel = this.isModel;
      console.log("ModelRef",modelRef.componentInstance.testdata);
    }
}
