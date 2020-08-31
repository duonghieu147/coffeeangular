import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService,AuthenticationService} from "../_service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  loading= false ;
  submitted = false ;
  returnUrl : string ;


  constructor(
    private formBuilder:FormBuilder,
    private route : ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService : AlertService
  ) { }

  ngOnInit(): void {
  }

}
