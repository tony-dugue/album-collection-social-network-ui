import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReleaseService } from '../../../../services/services';
import {
  PageResponseReleaseResponse,
  ReleaseResponse,
} from '../../../../services/models';

@Component({
  selector: 'app-my-releases',
  templateUrl: './my-releases.component.html',
  styleUrl: './my-releases.component.scss',
})
export class MyReleasesComponent implements OnInit {
  releaseResponse: PageResponseReleaseResponse = {};
  page: number = 0;
  size: number = 3;

  constructor(private releaseService: ReleaseService, private router: Router) {}

  ngOnInit(): void {
    this.findAllReleasesByOwner();
  }

  findAllReleasesByOwner() {
    this.releaseService
      .findAllReleasesByOwner({ page: this.page, size: this.size })
      .subscribe({
        next: (releases): void => {
          this.releaseResponse = releases;
        },
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllReleasesByOwner();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReleasesByOwner();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllReleasesByOwner();
  }

  goToLastPage() {
    this.page = (this.releaseResponse.totalPages as number) - 1;
    this.findAllReleasesByOwner();
  }

  goToNextPage() {
    this.page++;
    this.findAllReleasesByOwner();
  }

  get isLastPage(): boolean {
    return this.page === (this.releaseResponse.totalPages as number) - 1;
  }

  editRelease(release: ReleaseResponse) {
    this.router.navigate(['releases', 'manage', release.id]);
  }

  shareRelease(release: ReleaseResponse) {
    this.releaseService.updateShareableStatus({
      'release-id': release.id as number
    }).subscribe({
      next: () => {
        release.shareable = !release.shareable;
      }
    });
  }

  archiveRelease(release: ReleaseResponse) {
    throw new Error('Method not implemented.');
  }
}
