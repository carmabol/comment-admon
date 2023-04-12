import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouting } from './main.routing';
import { SharedModule } from 'src/app/shared/shared.module';
// Security components

@NgModule({
  imports: [
    CommonModule,
    MainRouting
  ],
  declarations: [
  ],
})
export class MainModule { }
