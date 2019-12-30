import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { AuthService } from '../../auth/shared/auth.service';


import { Review } from '../../review/shared/review.model';
import { ReviewService } from '../../review/shared/review.service';
import { Booking } from '../../booking/shared/booking.model';

import * as moment from 'moment';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;
  isRentalAcceptedByUser: boolean = false;

  rating: number;

  reviews: Review[] = [];

  constructor(private route: ActivatedRoute,
              private rentalService: RentalService,
              private reviewService: ReviewService,
              public auth: AuthService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params) => {
        this.getRental(params['rentalId']);
  		})
  }

  isExpired(endAtText: string) {
    const timeNow = moment();
    const endAt = moment(endAtText);

    return endAt.isBefore(timeNow);
  }

  checkIfAcceptedRental(rental: Rental): boolean {
    const bookings = rental.bookings
    const isAuth = this.auth.isAuthenticated();

    if (!isAuth) { return; }
    if (!bookings || bookings.length === 0 ) { return; }

    const userId = this.auth.getUserId();

    const activeBooking = bookings.filter((booking: Booking) => {
      if (userId === booking.user &&
          <any>booking.rental === rental._id &&
          !this.isExpired(booking.endAt)) {
        return booking
      }
    })

    return activeBooking.length > 0;
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
        this.isRentalAcceptedByUser = this.checkIfAcceptedRental(rental);
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
