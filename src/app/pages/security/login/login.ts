import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButton, MatCheckbox, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  showStatus=false;
}
