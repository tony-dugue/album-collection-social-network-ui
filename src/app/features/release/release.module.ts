import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseRoutingModule } from './release-routing.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ReleaseRoutingModule
  ]
})
export class ReleaseModule { }
