import { Component } from '@angular/core';
import { ReleaseRequest } from '../../../../services/models';
import { Router } from '@angular/router';
import { ReleaseService } from '../../../../services/services';

@Component({
  selector: 'app-manage-release',
  templateUrl: './manage-release.component.html',
  styleUrl: './manage-release.component.scss'
})
export class ManageReleaseComponent {

  errorMsg: Array<string> = [];
  selectedReleaseCover: any;
  selectedPicture: string | undefined;
  releaseRequest: ReleaseRequest = { artist: '', reference: '', synopsis: '', title: '' };

  constructor(
    private releaseService: ReleaseService,
    private router: Router,
  ) {}

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
    this.releaseService.saveRelease({ body: this.releaseRequest })
    .subscribe({
      next: (releaseId) => {
        this.releaseService.uploadReleaseCoverPicture({
          'release-id': releaseId,
          body: {
            file: this.selectedReleaseCover
          }
        }).subscribe({
          next: () => this.router.navigate(['/releases/my-releases'])
        });
      },
      error: (err): void => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
      }
    });
  }
}
