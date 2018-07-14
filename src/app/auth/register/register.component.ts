import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {username: 'Filip'};
  errors: any[] = [];

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.formData);

    this.auth.register(this.formData).subscribe(
      () => {
        this.router.navigate(['/login', {registered: 'success'}]);
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }
}
