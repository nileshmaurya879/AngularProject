import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AdminModule} from '../app/admin/admin.module';
import {UsersModule} from '../app/users/users.module';
import { LineNumberFormateComponent } from './LineNumberFormate/line-number-formate/line-number-formate.component';
import {HeaderComponent} from './Header/header/header.component';
// import {MatSliderModule} from '@angular/material/slider';
 import {MatTabsModule} from '@angular/material/tabs';
 import {MatCheckboxModule} from '@angular/material/checkbox'
 import {MatFormFieldModule} from '@angular/material/form-field'
 import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
 import {LineNumberFormateDetailsComponent} from './LineNumberFormate/line-number-formate-details/line-number-formate-details.component'
 import { MatInputModule } from '@angular/material/input';
 import {MatSelectModule} from '@angular/material/select';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms'
 
 @NgModule({
  declarations: [
    AppComponent,
    LineNumberFormateComponent,
    HeaderComponent,
    LineNumberFormateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AdminModule,
    UsersModule,
    // MatSliderModule,
     MatTabsModule,
     BrowserAnimationsModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [NgbActiveModal,],
  bootstrap: [AppComponent]
})
export class AppModule { }
