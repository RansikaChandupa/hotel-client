import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatLabel} from "@angular/material/input";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-verification',
    imports: [
        FormsModule,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        RouterLink
    ],
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss',
})
export class RegisterVerification implements OnInit{

  email:any
  constructor(private activatedRoute: ActivatedRoute){
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      this.email = res.get('email');
    })
  }

}
