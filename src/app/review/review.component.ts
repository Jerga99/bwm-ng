import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ReviewService } from './shared/review.service';

import { Review } from './shared/review.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bwm-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent  {

   @Input() bookingId: string;

   @Output() reviewSubmitted = new EventEmitter();

   modalRef: any;

   review: Review = {text: '', rating: 3};
   errors: any[];

   constructor(private modalService: NgbModal,
               private reviewService: ReviewService){}

   handleRatingChange(event) {
     this.review.rating = event.rating;
   }

   openReviewModal(content) {
     this.modalRef = this.modalService.open(content);
   }

   confirmReview() {
     debugger;
     this.reviewService.createReview(this.review, this.bookingId)
       .subscribe(
         (review: Review) => {
           this.reviewSubmitted.emit(review);
           this.modalRef.close();
         },
         (errorResponse: HttpErrorResponse) => {
           this.errors = errorResponse.error.errors;
         })
   }
}
