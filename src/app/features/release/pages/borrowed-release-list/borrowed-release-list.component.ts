import { Component, OnInit } from '@angular/core';
import { PageResponseBorrowedReleaseResponse } from '../../../../services/models/page-response-borrowed-release-response';
import {
  BorrowedReleaseResponse,
  FeedbackRequest,
  ReleaseResponse,
} from '../../../../services/models';
import { ReleaseService } from '../../../../services/services/release.service';
import { FeedbackService } from '../../../../services/services/feedback.service';

@Component({
  selector: 'app-borrowed-release-list',
  templateUrl: './borrowed-release-list.component.html',
  styleUrl: './borrowed-release-list.component.scss',
})
export class BorrowedReleaseListComponent implements OnInit {
  page = 0;
  size = 5;
  borrowedReleases: PageResponseBorrowedReleaseResponse = {};
  selectedRelease: ReleaseResponse | undefined = undefined;
  feedbackRequest: FeedbackRequest = { releaseId: 0, comment: '', note: 0 };

  constructor(
    private releaseService: ReleaseService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.findAllBorrowedReleases();
  }

  private findAllBorrowedReleases() {
    this.releaseService
      .findAllBorrowedReleases({ page: this.page, size: this.size })
      .subscribe({
        next: (resp) => {
          this.borrowedReleases = resp;
        },
      });
  }

  returnBorrowedRelease(release: BorrowedReleaseResponse) {
    this.selectedRelease = release;
    this.feedbackRequest.releaseId = release.id as number;
  }

  private giveFeedback() {
    this.feedbackService
      .saveFeedback({
        body: this.feedbackRequest,
      })
      .subscribe();
  }

  returnRelease(withFeedback: boolean) {
    this.releaseService
      .returnBorrowRelease({ 'release-id': this.selectedRelease?.id as number })
      .subscribe({
        next: () => {
          if (withFeedback) this.giveFeedback();
          this.selectedRelease = undefined;
          this.findAllBorrowedReleases();
        },
      });
  }

  // pagination

  gotToPage(page: number) {
    this.page = page;
    this.findAllBorrowedReleases();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBorrowedReleases();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBorrowedReleases();
  }

  goToLastPage() {
    this.page = (this.borrowedReleases.totalPages as number) - 1;
    this.findAllBorrowedReleases();
  }

  goToNextPage() {
    this.page++;
    this.findAllBorrowedReleases();
  }

  get isLastPage() {
    return this.page === (this.borrowedReleases.totalPages as number) - 1;
  }
}
