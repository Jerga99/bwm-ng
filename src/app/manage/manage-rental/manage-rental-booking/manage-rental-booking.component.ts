import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../../../booking/shared/booking.model';

@Component({
  selector: 'bwm-manage-rental-booking',
  templateUrl: './manage-rental-booking.component.html',
  styleUrls: ['./manage-rental-booking.component.scss']
})
export class ManageRentalBookingComponent implements OnInit {

  @Input() bookings: Booking[];

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

}
