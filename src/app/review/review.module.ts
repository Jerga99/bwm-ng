import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'angular-star-rating';

import { ReviewComponent } from './review.component';

import { ReviewService } from './shared/review.service';

@NgModule({
  declarations: [
    ReviewComponent
  ],
  exports: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    ReviewService
  ]
})
export class ReviewModule { }
