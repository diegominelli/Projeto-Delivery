import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  constructor(
    private router: Router,
    private snackBar: MatSnackBar ) { }


  ngOnInit () {
    
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void {
   
  }

  addUser() {
    this.router.navigate(['/usuarios/novo']);
  }

  openSnackBar(message: string, config) {
    this.snackBar.open(message, 'fechar', {
      duration: 9000,
      panelClass: ['style-error']
    });
  }

}
