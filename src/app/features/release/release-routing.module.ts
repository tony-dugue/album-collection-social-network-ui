import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ReleaseListComponent } from './pages/release-list/release-list.component';
import { MyReleasesComponent } from './pages/my-releases/my-releases.component';
import { ManageReleaseComponent } from './pages/manage-release/manage-release.component';
import { BorrowedReleaseListComponent } from './pages/borrowed-release-list/borrowed-release-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: '', component: ReleaseListComponent },
      { path: 'my-releases', component: MyReleasesComponent },
      { path: 'manage', component: ManageReleaseComponent },
      { path: 'manage/:releaseId', component: ManageReleaseComponent },
      { path: 'my-borrowed-releases', component: BorrowedReleaseListComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseRoutingModule { }
