import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-raisely-signup',
  templateUrl: './raisely-signup.component.html',
  styleUrls: ['./raisely-signup.component.scss']
})
export class RaiselySignupComponent implements OnInit {

  firstNameM = '';
  lastNameM = '';
  emailM = '';
  passwordM = '';
  isEmailValid = true;
  emailCheckRequestError = false;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm){
    sessionStorage.clear();
    if (userForm.invalid) {
      Object.keys(userForm.controls).forEach(key => {
        userForm.controls[key].markAsDirty();
      });
      return;
    }else{

      this.checkValidity(userForm.value.email).then(res => {
      const signUpObj = {
      campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
        data: {
        firstName: userForm.value.fname,
        lastName: userForm.value.lname,
        email: userForm.value.email,
        password: userForm.value.psw
        }
       };

      this.authService.signUp(signUpObj).then((response: any) => {
         sessionStorage.setItem('token', response.token);
         this.router.navigate(['/signedUp']);
       });
      });
    }
  }

  checkValidity(emailM){
    return new Promise((resolve, reject) => {
    const emailValidObj = {
      campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
      data: {
      email: emailM,
      }
     };

    if (emailM){
     this.authService.checkEmailValidity(emailValidObj).then((isEmailValid: boolean) => {
        this.isEmailValid = isEmailValid;
        resolve();
      }).catch(() => {
        this.isEmailValid = false;
        this.emailCheckRequestError = true;
        reject();
      });
     }
    });

  }

}
