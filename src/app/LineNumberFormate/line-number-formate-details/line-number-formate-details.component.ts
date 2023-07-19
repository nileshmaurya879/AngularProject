import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { OnInit, Input } from '@angular/core';
import { LinearFormateService } from 'src/app/Services/linear-formate.service';
import { LineNumberFormate, LineNumberFormateSectionType } from 'src/app/Models/line-number-formate.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-line-number-formate-details',
  templateUrl: './line-number-formate-details.component.html',
  styleUrls: ['./line-number-formate-details.component.css'],
})
export class LineNumberFormateDetailsComponent implements OnInit {

  //set up input variable
  mytest: string = "my testing values"
  @Input() item: LineNumberFormate;
  @Input() item1: any;
  @Input() testdata: LineNumberFormate[];
  tab: number;
  @Input() isModel: boolean;
  dublicateName: string;
  isDublicate: boolean;
  lineNumberFormateSectionTypeDetails: LineNumberFormateSectionType[];
  isDisable:boolean = true;


  LineNumberFormateFormDetails = new FormGroup({
    name: new FormControl(""),
    isDefault: new FormControl(false),
    allowFreeForm: new FormControl(false)
  })

  constructor(private _formBuilder: FormBuilder, private lineNumberFormateService: LinearFormateService, public ngbActiveModal: NgbActiveModal) {

  }
  ngOnInit(): void {

  }
  ngOnChanges() {
    console.log("all my ijhsbdjsbsbs", this.item)
    this.setLineNumberFormateFormDetailsValue(this.item)
  }

  /* setup for checking dublicate line Number fromate name*/
  inputChangesEvent(event:any) {
 
    var testvalues = event?.target?.value;
    this.LineNumberFormateFormDetails.get("name")?.valueChanges.subscribe((value) => {
      var test = this.testdata.find(x => x.name.trim().toLowerCase() == event?.target?.value.trim().toLowerCase())
      this.isDublicate = test != null ? true : false;
     
      console.log("******************evenet", event?.target?.value,this.LineNumberFormateFormDetails)
    })
    if(this.LineNumberFormateFormDetails.value.name != ''  && (this.LineNumberFormateFormDetails.value.isDefault || this.LineNumberFormateFormDetails.value.allowFreeForm))
    {
      this.isDisable = false;
    }
  }

  /* setup linenUmber Formate From Details values */
  setLineNumberFormateFormDetailsValue(lineNumberFormateFormDetailsValues: LineNumberFormate) {
    this.LineNumberFormateFormDetails.get("name")?.setValue(lineNumberFormateFormDetailsValues.name);
    this.LineNumberFormateFormDetails.get("isDefault")?.setValue(lineNumberFormateFormDetailsValues.isDefault);
    this.LineNumberFormateFormDetails.get("allowFreeForm")?.setValue(lineNumberFormateFormDetailsValues.AllowFreeForm);
  }

 /* add line number formate*/
  AddLineNumberFormate() {
    this.testdata.push({
      lineNumberFormatId: "",
      name: this.LineNumberFormateFormDetails?.value?.name as string,
      isDefault: this.LineNumberFormateFormDetails.value.isDefault as boolean,
      AllowFreeForm: this.LineNumberFormateFormDetails.value.allowFreeForm as boolean,
      Sections: []
    })
    this.isModel = false;
    this.ngbActiveModal.close();
    console.log("my group",this.LineNumberFormateFormDetails);
  }

  inputChangesEvents(event:any){
    console.log(event)
  }
}
