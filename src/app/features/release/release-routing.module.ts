import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ReleaseListComponent } from './pages/release-list/release-list.component';
import { MyReleasesComponent } from './pages/my-releases/my-releases.component';
import { ManageReleaseComponent } from './pages/manage-release/manage-release.component';
import { BorrowedReleaseListComponent } from './pages/borrowed-release-list/borrowed-release-list.component';
import { ReturnedReleasesComponent } from './pages/returned-releases/returned-releases.component';
import { authGuard } from '../../services/guard/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: ReleaseListComponent, canActivate: [authGuard] },
      { path: 'my-releases', component: MyReleasesComponent, canActivate: [authGuard] },
      { path: 'manage', component: ManageReleaseComponent, canActivate: [authGuard] },
      { path: 'manage/:releaseId', component: ManageReleaseComponent, canActivate: [authGuard] },
      { path: 'my-borrowed-releases', component: BorrowedReleaseListComponent, canActivate: [authGuard] },
      { path: 'my-returned-releases', component: ReturnedReleasesComponent, canActivate: [authGuard] },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseRoutingModule { }
