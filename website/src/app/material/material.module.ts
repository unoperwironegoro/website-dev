import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
