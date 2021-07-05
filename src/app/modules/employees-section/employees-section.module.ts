import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesSectionComponent } from './employees-section.component';
import { EmployeesSectionRoutingModule } from './employees-section-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeesSectionComponent
  ],
  imports: [
    CommonModule,
    EmployeesSectionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeesSectionModule { }
