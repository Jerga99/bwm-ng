import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

import { Review } from '../../review/shared/review.model';
import { ReviewService } from '../../review/shared/review.service';

import * as moment from 'moment';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  rating: number;

  reviews: Review[] = [];

  constructor(private route: ActivatedRoute,
              private rentalService: RentalService,
              private reviewService: ReviewService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params) => {
        this.getRental(params['rentalId']);
  		})
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
        this.getReviews(rental._id);
        this.getOverallRating(rental._id);
      });
  }

  getReviews(rentalId: string) {
    this.reviewService.getRentalReviews(rentalId)
      .subscribe((reviews: Review[]) => {
        this.reviews = reviews;
      });
  }

  getOverallRating(rentalId: string) {
    this.reviewService.getOverallRating(rentalId)
      .subscribe(rating => {
        this.rating = Math.round(rating * 10) / 10;
      })
  }

  formatDate(date: string): string {
    return `${moment(date).fromNow()}`;
  }

}
