import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbModule]
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [
        Validators.pattern(/^[1-9]{1}[0-9]{2}[1-9]{1}[0-9]{6}$/) 
      ]],
      email: ['', [Validators.required, Validators.email]]  
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.router.navigate(['/details'], { state: this.userForm.value }); 
    }
  }
}
