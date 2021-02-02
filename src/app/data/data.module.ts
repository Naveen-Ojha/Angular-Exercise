import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';


@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    HttpClientModule
  ]
})
export class DataModule { }
