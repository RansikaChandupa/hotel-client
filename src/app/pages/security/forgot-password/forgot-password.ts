import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatLabel} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
    imports: [
        FormsModule,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        RouterLink
    ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {

}
