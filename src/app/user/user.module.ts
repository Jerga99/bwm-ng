import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';

import { UserService } from './shared/user.service';
import { AuthService } from '../auth/shared/auth.service';

import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'users',
    component: UserComponent,
    children: [
      { path: 'profile', canActivate: [AuthGuard], component: UserDetailComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    UserDetailComponent
  ],
  providers: [
    UserService,
    AuthService
  ]
})
export class UserModule {}
