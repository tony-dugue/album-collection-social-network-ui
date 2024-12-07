import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseRoutingModule } from './release-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReleaseListComponent } from './pages/release-list/release-list.component';
import { ReleaseCardComponent } from './components/release-card/release-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { MyReleasesComponent } from './pages/my-releases/my-releases.component';
import { ManageReleaseComponent } from './pages/manage-release/manage-release.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    ReleaseListComponent,
    ReleaseCardComponent,
    RatingComponent,
    MyReleasesComponent,
    ManageReleaseComponent
  ],
  imports: [
    CommonModule,
    ReleaseRoutingModule,
    FormsModule
  ]
})
export class ReleaseModule { }
