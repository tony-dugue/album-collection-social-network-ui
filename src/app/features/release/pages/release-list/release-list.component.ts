import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReleaseService } from '../../../../services/services';
import { PageResponseReleaseResponse } from '../../../../services/models';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrl: './release-list.component.scss'
})
export class ReleaseListComponent implements OnInit {

  releaseResponse: PageResponseReleaseResponse = {};
  page: number = 0;
  size: number = 1;

  constructor(
    private releaseService: ReleaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllReleases();
  } 

  findAllReleases() {
    this.releaseService.findAllReleases({ page: this.page, size: this.size })
      .subscribe({
        next: (releases): void => {
          this.releaseResponse = releases;
        }
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllReleases();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReleases();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllReleases();
  }

  goToLastPage() {
    this.page = this.releaseResponse.totalPages as number - 1;
    this.findAllReleases();
  }

  goToNextPage() {
    this.page++;
    this.findAllReleases();
  }

  get isLastPage(): boolean {
    return this.page === this.releaseResponse.totalPages as number - 1;
  }
}
