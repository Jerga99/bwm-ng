import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AuthService } from '../../auth/shared/auth.service';

@Component({
  selector: 'bwm-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(private userService: UserService,
              private auth: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const userId = this.auth.getUserId();

    this.userService.getUser(userId).subscribe((user) => {
      this.user = user;
    }, (err) => {

    })
  }

}
