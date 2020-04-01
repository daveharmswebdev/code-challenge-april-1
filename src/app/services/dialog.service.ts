import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDialogComponent } from '../modals/review-dialog/review-dialog.component';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  displayReviewDialog(item) {
    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      width: '33%',
      height: '500px',
      data: { item }
    });

    return dialogRef.afterClosed().toPromise();
  }
}
