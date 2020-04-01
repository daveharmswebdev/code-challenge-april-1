import { Component, OnInit } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public descLine = [
    '300 Grams of primaloft one insulation',
    'schoeller microfiber shell',
    'diagonal quilting',
    'microfiber ripstop liner',
    'zipper garage at collar',
    'anchored bottom-hem adjusters',
    '3-in-1 front pockets',
    'zippered chest pocket',
    'two interior zippered pockets',
    'made in the philippines',
  ].map(line => line.toUpperCase());

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  showReviewDialog() {
    this.dialogService.displayReviewDialog('Tough Mojo Jacket').then(
      () => console.log('closed modal')
    );
  }
}
