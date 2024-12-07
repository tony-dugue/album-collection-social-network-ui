import { Component, OnInit } from '@angular/core';
import { PageResponseBorrowedReleaseResponse } from '../../../../services/models/page-response-borrowed-release-response';
import { ReleaseService } from '../../../../services/services/release.service';
import { BorrowedReleaseResponse } from '../../../../services/models/borrowed-release-response';

@Component({
  selector: 'app-returned-releases',
  templateUrl: './returned-releases.component.html',
  styleUrl: './returned-releases.component.scss',
})
export class ReturnedReleasesComponent implements OnInit {
  page = 0;
  size = 5;
  returnedReleases: PageResponseBorrowedReleaseResponse = {};
  message = '';
  level: 'success' |'error' = 'success';

  constructor(private releaseService: ReleaseService) {}

  ngOnInit(): void {
    this.findAllReturnedReleases();
  } 

  private findAllReturnedReleases() {
    this.releaseService
      .findAllReturnedReleases({ page: this.page, size: this.size })
      .subscribe({
        next: (resp) => (this.returnedReleases = resp),
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllReturnedReleases();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReturnedReleases();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllReturnedReleases();
  }

  goToLastPage() {
    this.page = (this.returnedReleases.totalPages as number) - 1;
    this.findAllReturnedReleases();
  }

  goToNextPage() {
    this.page++;
    this.findAllReturnedReleases();
  }

  get isLastPage() {
    return this.page === (this.returnedReleases.totalPages as number) - 1;
  }

  approveReleaseReturn(release: BorrowedReleaseResponse) {
    if (!release.returned) {
      return;
    }
    this.releaseService.approveReturnBorrowRelease({
      'release-id': release.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Release return approved';
        this.findAllReturnedReleases();
      }
    });
  }
}
