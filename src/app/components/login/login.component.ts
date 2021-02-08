import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
  let token = 'token';
  localStorage.setItem(token, 'token');
  localStorage.getItem(token);

  
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
  }
  console.log(this.loginForm,'login form')

    
    // return this.loginForm.value;
   
  }
}
