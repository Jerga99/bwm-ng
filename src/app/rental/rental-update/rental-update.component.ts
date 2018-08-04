import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { UcWordsPipe } from 'ngx-pipes';

import { Subject } from 'rxjs';

@Component({
  selector: 'bwm-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.scss']
})
export class RentalUpdateComponent implements OnInit {

  rental: Rental;

  rentalCategories: string[] = Rental.CATEGORIES;

  locationSubject: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute,
              private rentalService: RentalService,
              private toastr: ToastrService,
              private upperPipe: UcWordsPipe) {

    this.transformLocation = this.transformLocation.bind(this);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRental(params['rentalId']);
      })
  }

  transformLocation(location: string): string {
    return this.upperPipe.transform(location);
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }

  updateRental(rentalId: string, rentalData: any) {
    this.rentalService.updateDental(rentalId, rentalData).subscribe(
      (updatedRental: Rental) => {
        this.rental = updatedRental;

        if (rentalData.city || rentalData.street) {
          this.locationSubject.next(this.rental.city + ', ' + this.rental.street);
        }
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error.errors[0].detail, 'Error');
        this.getRental(rentalId);
      })
  }

  countBedroomAssets(assetsNum: number) {
    return  parseInt(<any>this.rental.bedrooms || 0, 10) + assetsNum;
  }
}
