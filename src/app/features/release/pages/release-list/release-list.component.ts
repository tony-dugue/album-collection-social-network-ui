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
  size: number = 5;

  constructor(
    private releaseService: ReleaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllBooks();
  } 

  findAllBooks() {
    this.releaseService.findAllReleases({ page: this.page, size: this.size })
      .subscribe({
        next: (releases): void => {
          this.releaseResponse = releases;
        }
      });
  }
}
