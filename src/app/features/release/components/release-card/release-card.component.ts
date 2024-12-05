import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReleaseResponse } from '../../../../services/models';

@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html',
  styleUrl: './release-card.component.scss',
})
export class ReleaseCardComponent {

  private _release: ReleaseResponse = {}
  private _manage = false
  private _releaseCover: string | undefined

  get release(): ReleaseResponse {
    return this._release;
  }

  @Input()
  set release(value: ReleaseResponse) {
    this._release = value;
  }

  get manage(): boolean {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }

  get releaseCover(): string | undefined {
    if (this._release.cover) {
      return 'data:image/jpg;base64,' + this._release.cover
    }
    return 'https://placehold.co/600x400';
  }

  @Output() private share: EventEmitter<ReleaseResponse> = new EventEmitter<ReleaseResponse>();
  @Output() private archive: EventEmitter<ReleaseResponse> = new EventEmitter<ReleaseResponse>();
  @Output() private addToWaitingList: EventEmitter<ReleaseResponse> = new EventEmitter<ReleaseResponse>();
  @Output() private borrow: EventEmitter<ReleaseResponse> = new EventEmitter<ReleaseResponse>();
  @Output() private edit: EventEmitter<ReleaseResponse> = new EventEmitter<ReleaseResponse>();
  @Output() private details: EventEmitter<ReleaseResponse> = new EventEmitter<ReleaseResponse>();

  onShare() {
    this.share.emit(this._release);
  }

  onArchive() {
    this.archive.emit(this._release);
  }

  onAddToWaitingList() {
    this.addToWaitingList.emit(this._release);
  }

  onBorrow() {
    this.borrow.emit(this._release);
  }

  onEdit() {
    this.edit.emit(this._release);
  }

  onShowDetails() {
    this.details.emit(this._release);
  }
}
