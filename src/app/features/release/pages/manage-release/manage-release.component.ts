import { Component, OnInit } from '@angular/core';
import { ReleaseRequest } from '../../../../services/models';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from '../../../../services/services';

@Component({
  selector: 'app-manage-release',
  templateUrl: './manage-release.component.html',
  styleUrl: './manage-release.component.scss',
})
export class ManageReleaseComponent implements OnInit {
  errorMsg: Array<string> = [];
  selectedReleaseCover: any;
  selectedPicture: string | undefined;
  releaseRequest: ReleaseRequest = {
    artist: '',
    reference: '',
    synopsis: '',
    title: '',
  };

  constructor(
    private releaseService: ReleaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const releaseId = this.activatedRoute.snapshot.params['releaseId'];
    if (releaseId) {
      this.releaseService
        .findReleaseById({
          'release-id': releaseId,
        })
        .subscribe({
          next: (release) => {
            this.releaseRequest = {
              id: release.id,
              title: release.title as string,
              artist: release.artist as string,
              reference: release.reference as string,
              synopsis: release.synopsis as string,
              shareable: release.shareable,
            };
            if (release.cover) {
              this.selectedPicture = 'data:image/jpg;base64,' + release.cover;
            }
          },
        });
    }
  }

  onFileSelected(event: any) {
    this.selectedReleaseCover = event.target.files[0];
    console.log(this.selectedReleaseCover);

    if (this.selectedReleaseCover) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedReleaseCover);
    }
  }

  saveRelease() {
    this.releaseService.saveRelease({ body: this.releaseRequest }).subscribe({
      next: (releaseId) => {
        this.releaseService
          .uploadReleaseCoverPicture({
            'release-id': releaseId,
            body: {
              file: this.selectedReleaseCover,
            },
          })
          .subscribe({
            next: () => this.router.navigate(['/releases/my-releases']),
          });
      },
      error: (err): void => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
      },
    });
  }
}
