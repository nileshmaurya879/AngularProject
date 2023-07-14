import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  formGroup:FormGroup;

  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      items: this.formBuilder.array([]) // Initialize an empty array
    });
    console.log(this.formGroup)
  }
  get itemsFormArray(): FormArray {
    return this.formGroup.get('items') as FormArray;
  }

  removeItem(index:number){
    this.itemsFormArray.removeAt(index)
  }
  addItem(){
    const newItem = this.formBuilder.group({
      name:['',Validators.required]
    })
    this.itemsFormArray.push(newItem);
  }
  submit(){
    console.log("****************************",this.formGroup.value)
  }
}
