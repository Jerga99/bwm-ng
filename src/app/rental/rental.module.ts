import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes: Routes = [
  { path: 'rentals',
    component: RentalComponent,
    children: [
    	{ path: '', component: RentalListComponent },
    	{ path: ':rentalId', component: RentalDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent
  ],
  imports: [
  	CommonModule,
  	RouterModule.forChild(routes)
  ],
  providers: [RentalService]
})
export class RentalModule {}
