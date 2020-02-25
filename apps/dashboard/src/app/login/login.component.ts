import { NotifyService } from '@mdv-six/core-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv-six-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logIn: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notify: NotifyService
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.logIn = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  login() {
    if(this.logIn.invalid) {
      this.notify.notify('Complete fields with valid information')
    } else {
      this.notify.notify('Successfully logged in')
    this.router.navigate(['/projects']);
    }
  }
}
