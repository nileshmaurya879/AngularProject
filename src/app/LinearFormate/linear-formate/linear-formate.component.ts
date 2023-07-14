import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-linear-formate',
  templateUrl: './linear-formate.component.html',
  styleUrls: ['./linear-formate.component.css']
})
export class LinearFormateComponent {
  formGroup:FormGroup;

  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      items: this.formBuilder.array([]) // Initialize an empty array
    });
  }
  get itemsFormArray(): FormArray {
    return this.formGroup.get('items') as FormArray;
  }

  removeItem(index:number){

  }
  addItem(){
    const newItem = this.formBuilder.group({
      name:['',Validators.required]
    })
  }
}
