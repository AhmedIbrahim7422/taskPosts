import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any
  constructor(private users: UsersService, private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = formBuilder.group({
      username: ["" , Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]},
      { validators: this.passwordMatchValidator }
    )
   }

  ngOnInit(): void {
  }
  register(){
    this.users.users.push(this.registerForm.value)
    console.log(this.registerForm.value)
    console.log(this.users.users)
    localStorage.setItem("users", JSON.stringify(this.users.users))
    this.router.navigate(['/landing/login'])

  }


  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!.value;
    const confirmPassword = formGroup.get('confirmPassword')!.value;
  
    if (password === confirmPassword) {
      return null; // Passwords match
    } else {
      return { mismatch: true }; // Passwords do not match
    }
  }
}
