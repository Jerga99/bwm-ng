import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) {}

  public createReview(review: Review, bookingId: string): Observable<any> {
    return this.http.post(`/api/v1/reviews?bookingId=${bookingId}`, review);
  }

  public getRentalReviews(rentalId: string): Observable<any> {
    return this.http.get(`/api/v1/reviews?rentalId=${rentalId}`);
  }

  public getOverallRating(rentalId: string): Observable<any> {
    return this.http.get(`/api/v1/reviews/${rentalId}/rating`);
  }
}
