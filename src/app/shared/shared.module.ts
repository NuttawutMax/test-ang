import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe } from '@angular/common';
import { CalulateBirthDatePipe } from './components/pipes/calulate-birth-date.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    TitleComponent,
    CalulateBirthDatePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

    // Component
    TitleComponent,

    // Pipe
    CalulateBirthDatePipe
  ]
})
export class SharedModule { }
