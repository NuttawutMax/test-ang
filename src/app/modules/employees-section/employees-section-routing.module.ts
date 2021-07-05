import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeesSectionComponent } from './employees-section.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesSectionComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeesSectionRoutingModule { }
