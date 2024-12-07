import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseRoutingModule } from './release-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReleaseListComponent } from './pages/release-list/release-list.component';
import { ReleaseCardComponent } from './components/release-card/release-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { MyReleasesComponent } from './pages/my-releases/my-releases.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    ReleaseListComponent,
    ReleaseCardComponent,
    RatingComponent,
    MyReleasesComponent
  ],
  imports: [
    CommonModule,
    ReleaseRoutingModule
  ]
})
export class ReleaseModule { }
