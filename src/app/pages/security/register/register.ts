import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatLabel} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
    imports: [
        FormsModule,
        MatButton,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        RouterLink
    ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
