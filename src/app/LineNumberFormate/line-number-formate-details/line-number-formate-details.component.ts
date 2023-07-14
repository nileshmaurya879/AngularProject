import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { OnInit, Input } from '@angular/core';
import { LinearFormateService } from 'src/app/Services/linear-formate.service';
import { LineNumberFormate, LineNumberFormateSectionType } from 'src/app/Models/line-number-formate.model';
import { NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-line-number-formate-details',
  templateUrl: './line-number-formate-details.component.html',
  styleUrls: ['./line-number-formate-details.component.css'],
})
export class LineNumberFormateDetailsComponent implements OnInit {

  //set up input variable
  @Input() item: any;
  @Input() item1: any;
  tab: number;
  isModal:boolean = true;
  lineNumberFormateSectionTypeDetails: LineNumberFormateSectionType[];


  LineNumberFormateFormDetails = new FormGroup({
    LineNumerFormateName: new FormControl(""),
    // LineNumerFormateSectionName: new FormControl(''),
    // LineNumerFormateSectionMinChar: new FormControl(''),
    // LineNumerFormateSectionMaxChar: new FormControl(''),
    // LineNumerFormateSectionSpecialChar: new FormControl(''),
    isDefault: new FormControl(false),
    allowFree: new FormControl(false)
  })

  constructor(private _formBuilder: FormBuilder, private lineNumberFormateService: LinearFormateService, public ngbActiveModal:NgbActiveModal) {

  }
  ngOnInit(): void {
    //this.getLineNumberNumberFormateSectionType();
   // this.tab = this.item.sections.length;
   
 
  }
  ngOnChanges() {
    this.setLineNumberFormateFormDetailsValue(this.item);
    //this.item1.push({name:this.LineNumberFormateFormDetails.value.LineNumerFormateName,isDefault:this.LineNumberFormateFormDetails.value.isDefault,AllowFreeForm:this.LineNumberFormateFormDetails.value.allowFree});

    console.log('******************** my testing',this.item1,this.item)

  }

  /* Set up Get Line Numberv formate section Type API*/
  // getLineNumberNumberFormateSectionType() {
  //   this.lineNumberFormateService.getLineNumberFormateSectionType().subscribe((data) => {
  //     this.lineNumberFormateSectionTypeDetails = data;
  //   })
  // }

  /* setup linenUmber Formate From Details values */
  setLineNumberFormateFormDetailsValue(lineNumberFormateFormDetailsValues: LineNumberFormate) {
    this.LineNumberFormateFormDetails.get("LineNumerFormateName")?.setValue(lineNumberFormateFormDetailsValues.name);
    this.LineNumberFormateFormDetails.get("isDefault")?.setValue(lineNumberFormateFormDetailsValues.isDefault);
  }
  AddLineNumberFormate(){
    console.log("************************",this.item);

    this.ngbActiveModal.close();
  }
}
